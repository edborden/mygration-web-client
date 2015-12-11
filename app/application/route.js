import Ember from 'ember';

export default Ember.Route.extend({

  // EVENTS

  beforeModel() {
    return this.get('session').fetch().then((result) => {
      console.log('success session');
    }, () => {
      console.log('no session');
    });
  },

  // ACTIONS

  actions: {

    signOut() {
      this.get('session').close();
    }

  }
  
});