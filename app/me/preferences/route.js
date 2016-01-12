import Ember from 'ember';
import HasMe from 'mygration-web-client/mixins/has-me';

const {
  Route,
  isEmpty
} = Ember;

export default Route.extend(HasMe, {

  model() {
    let me = this.get('me');
    let noDetail = isEmpty(me.get('detail').get('content'));
    if (noDetail) {
      return this.get('store').createRecord('detail');
    } else {
      return me.get('detail');
    }
  }

});