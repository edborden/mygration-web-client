import Ember from 'ember';
const {
  Test: { registerAsyncHelper }
} = Ember;

registerAsyncHelper('waitForPromise', function(app, promiseLocation, promiseName) {
  return new Ember.Test.promise(function(resolve) {
    Ember.Test.adapter.asyncStart();

    let promise = app.__container__.lookup("route:login").get("loginComplete");
    console.log(app,app.__container__,app.__container__.lookup("route:login"),app.__container__.lookup("route:login").get("loginComplete"));

    promise.then(function() {
      Ember.run.schedule('afterRender', null, resolve);
      Ember.Test.adapter.asyncEnd();
    });
  });  
});