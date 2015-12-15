import { module } from 'qunit';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';
import stubOAuth from '../helpers/stub-oauth';
import authFixtures from '../helpers/auth-fixtures';
import stubFirebase from '../helpers/stub-firebase';
import unstubFirebase from '../helpers/unstub-firebase';

export default function(name, options = {}) {
  module(name, {
    beforeEach() {
      stubOAuth(authFixtures);
      stubFirebase();
      this.application = startApp();

      if (options.beforeEach) {
        options.beforeEach.apply(this, arguments);
      }
    },

    afterEach() {
      destroyApp(this.application);
      unstubFirebase();
      if (options.afterEach) {
        options.afterEach.apply(this, arguments);
      }
    }
  });
}
