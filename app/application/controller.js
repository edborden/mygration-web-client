import Ember from 'ember';
import computed from 'ember-computed-decorators';
import { alias } from 'ember-computed-decorators';
const {
  Controller,
  inject: { service }
} = Ember;

export default Controller.extend({

  // services
  meService: service('me'),

  // computed

  @alias('meService.model') me,

  @computed('currentRouteName')
  noNav() {
    return ['login', 'index'].contains(this.get('currentRouteName'));
  },

  @computed('currentRouteName')
  noFooter() {
    return ['index'].contains(this.get('currentRouteName'));
  },

  @computed
  year() {
    let date = new Date();
    return date.getFullYear();
  }

});