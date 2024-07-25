import { module, test } from 'qunit';
import { setupRenderingTest } from 'pt-client-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | exercise/image', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Exercise::Image />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Exercise::Image>
        template block text
      </Exercise::Image>
    `);

    assert.dom().hasText('template block text');
  });
});
