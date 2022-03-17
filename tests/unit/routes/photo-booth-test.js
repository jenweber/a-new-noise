import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | photo-booth', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:photo-booth');
    assert.ok(route);
  });
});
