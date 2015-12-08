import Ember from 'ember';

export default Ember.Route.extend({

  // EVENTS

  beforeModel() {
    return this.get('session').fetch().catch(function() {});
  },

  // ACTIONS

  actions: {

    signOut() {
      this.get('session').close();
    }

  }
  
});