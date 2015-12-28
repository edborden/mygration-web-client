import Ember from 'ember';
import computed from 'ember-computed-decorators';
import { alias } from 'ember-computed-decorators';
const {
  Controller,
  inject: { service }
} = Ember;

export default Controller.extend({

  // attributes
  email: null,

  // actions
  actions: {
    subscribe() {
      console.log(this.get('email'));
    }
  }

});