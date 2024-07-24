import { module, test } from 'qunit';
import { setupTest } from 'pt-client-app/tests/helpers';

module('Unit | Route | home/feed', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:home/feed');
    assert.ok(route);
  });
});
