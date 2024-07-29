import { module, test } from 'qunit';
import { setupTest } from 'pt-client-app/tests/helpers';

module('Unit | Route | exercise', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:exercise');
    assert.ok(route);
  });
});
