import { module, test } from 'qunit';
import { setupRenderingTest } from 'pt-client-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | exercise-modal', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ExerciseModal />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <ExerciseModal>
        template block text
      </ExerciseModal>
    `);

    assert.dom().hasText('template block text');
  });
});
