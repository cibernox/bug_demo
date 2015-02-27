import DS from 'ember-data';

var ApplicationSerializer = DS.ActiveModelSerializer.extend({
  // extractMeta: function(store, type, payload) {
  //   if (payload && payload.metadata) {
  //     store.metaForType(type, {
  //       meta: payload.metadata
  //     });
  //     return delete(payload.metadata);
  //   }
  // }
});

export default ApplicationSerializer;
