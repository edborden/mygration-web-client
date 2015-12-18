import Ember from 'ember';
const {
  Route
} = Ember;

export default Route.extend({

  // actions
  actions: {

    signIn(provider) {
      let session = this.get('session');
      session.open('firebase', { provider })
      .then(() => {
        this.send('authenticate');
      });
    }

  }

});