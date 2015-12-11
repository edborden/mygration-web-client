import Ember from 'ember';
const {
  Test: { registerHelper }
} = Ember;

registerHelper(
  'findButton', function(app, buttonName) {

    // find 'button' or '.btn' containing name
    let buttonSelector = `button:contains(${buttonName})`;
    let btnSelector = `.btn:contains(${buttonName})`;
    let aSelector = `a:contains(${buttonName})`;

    let selector = `${buttonSelector}, ${btnSelector}, ${aSelector}`;
    let el = find(selector);

    return el;
  }
);

registerHelper(
  'expectButton', function(app, buttonName, assert) {
    let el = findButton(buttonName);
    if (el.length) {
      assert.ok(true, `Found ${el.length} of button "${buttonName}"`);
    } else {
      assert.ok(false, `Found 0 of button "${buttonName}"`);
    }
  }
);