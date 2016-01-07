import DS from 'ember-data';
import Ember from 'ember';
import { alias } from 'ember-computed-decorators';

const {
  Model,
  attr,
  belongsTo,
  hasMany
} = DS;

const {
  inject: { service }
} = Ember;

export default Model.extend({

  // services
  meService: service('me'),
  @alias('meService.model') me,

  // attributes
  age: attr('number'),

  // associations
  //citizenships: hasMany('citizenship'),
  languages: hasMany('language'),

  // events
  didCreate() {
    let me = this.get('me');
    me.set('detail', this);
    me.save();
  }

});