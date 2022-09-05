import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | getting-in-touch', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:getting-in-touch');
    assert.ok(route);
  });
});
