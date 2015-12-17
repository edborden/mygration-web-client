import Ember from 'ember';

export default Ember.Service.extend({

  init() {
    this._waiter = function() {
      return false;
    };
  },

  wait() {
    if (Ember.testing) {
      Ember.Test.registerWaiter(this._waiter);
    }
  },

  unwait() {
    if (Ember.testing) {
      Ember.Test.unregisterWaiter(this._waiter);
    }
  },

  promisify(ref, methodName, ...args) {
    let promise;
    Ember.run(() => {
      promise = new Ember.RSVP.Promise((resolve) => {

        Ember.run(this, 'wait');

        let callback = (success) => {
          Ember.run(this, 'unwait');
          Ember.run(null, resolve, success);
        };

        Ember.run(ref, methodName, ...args).then(callback);
      });
    });
    return promise;
  }

});