import Ember from 'ember';
import { alias } from 'ember-computed-decorators';

const {
  Route,
  RSVP,
  inject: { service },
  isEmpty
} = Ember;

export default Route.extend({

  // services
  meService: service('me'),
  @alias('meService.model') me,

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