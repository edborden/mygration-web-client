import Ember from 'ember';
const {
  isEmpty,
  inject: { service },
  Route
} = Ember;

export default Route.extend({

  // services
  meService: service('me'),

  // events
  beforeModel() {
    return this.get('store').findAll('country');
  },
  afterModel() {
    if (this.get('session').get('isAuthenticated')) {
      return this._setupMeService();
    }
  },

  // actions
  actions: {

    signOut() {
      this.get('session').close();
      this.transitionTo('index');
    },

    authenticate() {
      this._setupMeService()
      .then(() => {
        this.transitionTo('me');
      });
    },

    accessDenied() {
      this.transitionTo('login');
    }
  },

  // helpers
  _setupMeService() {
    let store = this.get('store');
    let session = this.get('session');
    let currentUser = session.get('currentUser');
    return new Ember.RSVP.Promise((resolve) => {
      store.query('facebook', {
        orderBy: 'uid',
        equalTo: currentUser.id
      })
      .then((facebook) => {
        if (isEmpty(facebook)) {
          this._createUserWithFacebook(currentUser)
          .then((result) => {
            this._setCurrentUserOnMe(result);
            resolve();
          });
        } else {
          facebook.get('firstObject').get('user')
          .then((result) => {
            if (isEmpty(result)) {
              console.log('No user for existing auth?');
            } else {
              this._setCurrentUserOnMe(result);
              resolve();
            }
          });
        }
      });
    });
  },

  _createUserWithFacebook(currentUser) {
    let store = this.get('store');
    let { cachedUserProfile } = currentUser;
    return new Ember.RSVP.Promise((resolve) => {
      let newUser = store.createRecord('user', {
        // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
        firstName: cachedUserProfile.first_name,
        lastName: cachedUserProfile.last_name
      });
      let newFacebook = store.createRecord('facebook', {
        token: currentUser.accessToken,
        uid: currentUser.id,
        user: newUser
      });
      newUser.set('facebook', newFacebook);
      Ember.RSVP.all([newUser.save(), newFacebook.save()])
      .then(function() {
        resolve(newUser);
      });
    });
  },

  _setCurrentUserOnMe(currentUser) {
    this.get('meService').set('model', currentUser);
  }
});