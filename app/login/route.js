import Ember from 'ember';
const {
  Route
} = Ember;

export default Route.extend({

  // ACTIONS

  actions: {

    signIn(providerAtt) {
      this.get('session').open('firebase', { provider: providerAtt }).then(function(data) {
        console.log(data.currentUser);
        return false
      });
    }

  }

});