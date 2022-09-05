import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | image', function (hooks) {
  setupRenderingTest(hooks);

  test('width testing', async function (assert) {

    await render(hbs`<Image @width="25"/>`);
    assert.equal(document.querySelector("#image-home").classList.value.includes("w-25"),true);
    assert.equal(this.element.textContent.trim(),"view larger");

    await click("#image-home");

    assert.equal(document.querySelector("#image-home").classList.value.includes("w-100"),true);
    assert.equal(this.element.textContent.trim(),"view smaller");


  });
});
