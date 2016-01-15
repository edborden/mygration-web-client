import Ember from 'ember';
import HasMe from 'mygration-web-client/mixins/has-me';

const {
  Route,
  isEmpty
} = Ember;

export default Route.extend(HasMe, {

  model() {
    let me = this.get('me');
    let noProfile = isEmpty(me.get('profile').get('content'));
    if (noProfile) {
      return this.get('store').createRecord('profile');
    } else {
      return me.get('profile');
    }
  }

});