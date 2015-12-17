import Ember from 'ember';
const {
  Route,
  isEmpty,
  inject: { service }
} = Ember;

export default Route.extend({

  // services
  meService: service('me'),

  // actions
  actions: {

    signIn(provider) {
      let store = this.get('store');
      let session = this.get('session');
      let meService = this.get('meService');
      let callback = () => {
        Ember.run(() => {
          Ember.run(this, 'transitionTo', 'index');
          Ember.run.later(this, '_loginCompleted', 1000);
        });
      };
      this.set('loginComplete',
        new Ember.RSVP.Promise((r) => { this._loginCompleted = r; })
      );
      session.open('firebase', { provider })
      .then((data) => {
        console.log(data);
        let {
          currentUser,
          currentUser: { cachedUserProfile }
        } = data;
        Ember.run(store, 'query', 'facebook', {
          orderBy: 'uid',
          equalTo: currentUser.id
        }).then(callback);
        return false;
      });
    }

  }

});