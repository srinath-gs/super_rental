import { module, test } from 'qunit';
import { visit, currentURL, click, fillIn, render } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { hbs } from 'ember-cli-htmlbars';

module('Acceptance | routes', function (hooks) {
  setupApplicationTest(hooks);

  // hooks.before(async function(){
  //     let a= await fetch("api_rental.json");
  //     let b= await a.json();
  //     this.set("api_res",b);
  // })
  test('visiting /routes', async function (assert) {
    await visit('/index');
    assert.equal(currentURL(), '/index');
  });

  test('visiting about and contact', async function (assert) {
    await visit('/about');
    assert.equal(currentURL(), '/about');
    await click(".btn-primary");
    assert.equal(currentURL(), '/getting-in-touch');
  });

  test("testing search box",async function(assert){
    await visit("/")
    assert.equal(currentURL(), '/');

    await fillIn(`input`,"o");
    this.element.querySelector("#where").dispatchEvent(new Event("input",{bubbles:true}));
    assert.equal(this.element.querySelector("#where").value,"o");
    // assert.equal(this.element.querySelectorAll("li").length,2);
    })

    // test('visiting about and contact', async function (assert) {
    //   await render(hbs`<Search @details={{this.api_result}}/>`)

    // });
});
