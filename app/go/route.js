import Ember from 'ember';
import HasMe from 'mygration-web-client/mixins/has-me';

const {
  Route,
  isEmpty
} = Ember;

export default Route.extend(HasMe, {

  model() {
    return this.get('store').query('profile', {
      orderBy: 'hasListings',
      equalTo: true
    });
  }

});