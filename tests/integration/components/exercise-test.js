import { module, test } from 'qunit';
import { setupRenderingTest } from 'pt-client-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | exercise', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Exercise />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Exercise>
        template block text
      </Exercise>
    `);

    assert.dom().hasText('template block text');
  });
});
