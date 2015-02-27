import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('login', { path: '/' });

  this.resource('staff-members', function() {
    this.route('edit', { path: '/:staff_member_id/edit' });
    this.route('show', { path: '/:staff_member_id' });
    this.route('new');
  });
});

export default Router;
