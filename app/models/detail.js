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
  citizenships: hasMany('country'),
  languages: hasMany('language'),
  experiences: hasMany('experience'),
  specializations: hasMany('specialization'),
  interests: hasMany('interest'),

  // events
  /* 
    we can't save an empty detail to firebase, there has to be some content,
    so the detail will get created with the first att/association that gets
    added to it. that model won't know about this model's status, so we use
    this hook to automatically add the detail to the user on creation.
  */
  didCreate() {
    let me = this.get('me');
    me.set('detail', this);
    me.save();
  }

});