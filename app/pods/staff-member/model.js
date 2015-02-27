import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  // Attributes
  username: DS.attr('string'),
  email: DS.attr('string'),
  title: DS.attr('string'),
  forename: DS.attr('string'),
  surname: DS.attr('string'),
  createdAt: DS.attr('date'),
  loggedAt: DS.attr('date'),
  schoolAdmin: DS.attr('boolean'),
  storeAccess: DS.attr('boolean'),
  mobileBetaUser: DS.attr('boolean'),
  typeOverride: DS.attr('boolean'),


  // CPs
  //        TODO: Extract common behavior with teachers
  fullName: Ember.computed('forename', 'surname', function() {
    return `${this.get("forename")} ${this.get("surname")}`;
  }),

  fullNameTitle: Ember.computed('title', 'fullName', function() {
    return `${this.get("title")} ${this.get("fullName")}`;
  })
});
