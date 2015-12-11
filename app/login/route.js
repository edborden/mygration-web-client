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
      session.open('firebase', { provider })
      .then((data) => {
        console.log(data);
        let {
          currentUser,
          currentUser: { cachedUserProfile }
        } = data;
        store.query('facebook', {
          orderBy: 'uid',
          equalTo: currentUser.id
        }).then((facebook) => {
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

            facebook.get('firstObject').get('user').then((currentUser) => {
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
        return false;
      });
    }

  }

});