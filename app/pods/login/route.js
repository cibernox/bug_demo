import Ember from 'ember';

export default Ember.Route.extend({
  redirect: function() {
    if (this.session.isAuthenticated) {
      this.replaceWith('staff-members');
    }
  },
});
