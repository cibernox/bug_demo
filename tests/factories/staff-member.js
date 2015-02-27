import EP from 'ember-pretenderify';

export default EP.Factory.extend({
  username(i){
    return 'staff' + i;
  },

  email(i){
    return `staff_${i}@example.com`;
  },

  forename(i) {
    return 'StaffName' + i;
  },

  surname(i) {
    return 'StaffSurname' + i;
  },

  title: 'Mr.',
  createdAt: '2015-02-21T11:21:09+00:00',
  loggedAt: '2015-02-24T10:21:09+00:00',
  schoolAdmin: false,
  storeAccess: false,
  mobileBetaUser: false,
  typeOverride: false,
  school_id: null
});
