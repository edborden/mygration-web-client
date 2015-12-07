import Ember from 'ember';
const {
  Route
} = Ember;

export default Route.extend({

  // EVENTS

  beforeModel() {
    return this.get('session').fetch().catch(function() {});
  },

  // ACTIONS

  actions: {

    signIn(providerAtt) {
      this.get('session').open('firebase', { provider: providerAtt }).then(function(data) {
        console.log(data.currentUser);
      });
    },

    signOut() {
      this.get('session').close();
    }

  }
});