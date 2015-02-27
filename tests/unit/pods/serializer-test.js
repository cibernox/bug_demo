import { test, moduleFor } from 'ember-qunit';
moduleFor('serializer:application', 'ApplicationSerializer', {});

test('it exists', function(assert) {
  var serializer = this.subject();
  assert.ok(serializer);
});
