import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../helpers/start-app';

var application;

module('Acceptance: StaffMember Show', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /staff-members/:id should show staff-member page', function(assert) {
  var staffMember = server.create('staff-member', { forename: 'Michael', surname: 'Bulpitt' });
  authenticateSession();
  visit('/staff-members/' + staffMember.id);
  andThen(function() {
    assert.equal(find('h3').text(), 'Details of Michael Bulpitt');
  });
});
