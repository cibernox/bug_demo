import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../helpers/start-app';

var application;

module('Acceptance: StaffMember Edit', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /staff-members/1/edit', function(assert) {
  var member = server.create('staff-member', { forename: 'Michael', surname: 'Bulpitt' });
  authenticateSession();
  visit(`staff-members/${member.id}/edit`);
  andThen(function() {
    assert.equal(currentRouteName(), 'staff-members.edit');
    assert.equal(find('h3').text(), 'Michael Bulpitt');
  });
});

test('visiting /staff-members/1/edit as unauthenticated should render login page', function(assert) {
  visit('/staff-members/1/edit');
  andThen(function() {
    assert.equal(find('h3').text(), 'Login');
  });
});
