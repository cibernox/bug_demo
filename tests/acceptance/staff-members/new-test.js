import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../helpers/start-app';

var application;

module('Acceptance: StaffMember New', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});


test('creating a new staff-member', function(assert) {
  authenticateSession();
  visit('/staff-members/new');
  fillIn('input.title', 'Mr.');
  fillIn('input.forename', 'Michael');
  fillIn('input.surname', 'Bulpitt');
  click("form .btn");
  andThen(function() {
    assert.equal(find('h3').text(), 'Staff Members');
  });
});

test('visiting /staff-members/new as guest should render login page', function(assert) {
  visit('/staff-members/new');
  andThen(function() {
    assert.equal(find('h3').text(), 'Login');
  });
});
