import { test } from 'qunit';
import moduleForAcceptance from '../helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | login');

test('visiting /login', function(assert) {
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/login');
    expectButton('Login with Facebook', assert);
  });
});

test('logging in as a new user', function(assert) {
  visit('/login');
  click('button');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
