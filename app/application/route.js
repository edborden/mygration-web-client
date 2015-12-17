import Ember from 'ember';
const {
  isEmpty,
  inject: { service }
} = Ember;

export default Ember.Route.extend({

  // services
  meService: service('me'),

  // events
  beforeModel() {
    let session = this.get('session');
    return session.fetch().then(() => {
      this._authenticate();
    })
    .catch( (error)=> {
      console.log('no session', error);
    });
  },

  // actions
  actions: {

    signOut() {
      this.get('session').close();
    },

    authenticate() {
      this._authenticate();
    }

  },

  _authenticate() {
    let store = this.get('store');
    let meService = this.get('meService');
    let session = this.get('session');
    let currentUser = session.get('currentUser');
    let { cachedUserProfile } = currentUser;
    store.query('facebook', {
      orderBy: 'uid',
      equalTo: currentUser.id
    })
    .then((facebook) => {
      if (isEmpty(facebook)) {
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
        newUser.save();
        newFacebook.save();
      } else {
        console.log('Facebook exists');

        facebook.get('firstObject').get('user')
        .then((currentUser) => {
          console.log(currentUser);
          if (isEmpty(currentUser)) {
            console.log('No user');
          } else {
            meService.set('model', currentUser);
            this.transitionTo('index');
          }
        });
      }

    });
  }
});