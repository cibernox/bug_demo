import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    destroyWithPrompt: function(record, validation) {
      let expected = record.get(validation);
      let confirmation = window.prompt(this.t("shared.destroyPrompt", expected));
      if (confirmation === null) {
        return;
      }
      if (expected === confirmation) {
        record.destroyRecord();
      } else {
        alert("The value doesn't match. The record was not deleted");
      }
    },

    saveRecord: function(model) {
      if (model.get("isValid")) {
        let indexRouteName = model.constructor.typeKey.pluralize().dasherize() + '.index';
        model.save().then(() => this.transitionTo(indexRouteName));
      } else {
        this.set("errorMessage", "You have to fill all the fields");
      }
      return false;
    }
  }
});
