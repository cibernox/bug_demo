import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('staff-member');
  },
  deactivate: function() {
    var model = this.modelFor('staff-members/new');
    if (model.get('isNew')) {
      return model.destroyRecord();
    }
  }
});
