import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../helpers/start-app';

var application;
var originalPrompt = window.prompt;
var lastPromptArgs;

module('Acceptance: StaffMembers Index', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /staff-members as authenticated should show page title', function(assert) {
  server.createList('staff-member', 3);
  authenticateSession();
  visit('/staff-members');
  andThen(function() {
    assert.equal(find('h3').text(), 'Staff Members');
    assert.equal(find('tbody tr').length, 3);
  });
});

test('visiting /schools as unauthenticated should render login page', function(assert) {
  visit('/staff-members');
  andThen(function() {
    assert.equal(find('h3').text(), 'Login');
  });
});


module('Acceptance: StaffMember destroy from staff-members index', {
  beforeEach: function() {
    application = startApp();
    server.createList('staff-member', 3);
    window.prompt = function(...args) {
      lastPromptArgs = args;
      return "StaffName0 StaffSurname0";
    };
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
    window.prompt = originalPrompt;
  }
});

test('staff-members can be deleted from the index page, with a security prompty', function(assert) {
  authenticateSession();
  visit('/staff-members');
  andThen(function() {
    assert.equal(find('h3').text(), 'Staff Members');
    assert.equal(find('tbody tr').length, 3, 'There is 3 staff-members');
  });
  click('tbody tr:first .destroy');
  andThen(function() {
    var msg = "You're about to destroy the record \"StaffName0 StaffSurname0\". \nThis action cannot be undone.\nPlease type \"StaffName0 StaffSurname0\" of the school to confirm";
    assert.deepEqual(lastPromptArgs[0], msg, 'The user saw a prompt to confirm destroy');
    assert.equal(find('tbody tr').length, 2, 'There is only 2 teachers now');
  });
});