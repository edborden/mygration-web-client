import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo,
  hasMany
} = DS;

export default Model.extend({

  // attributes
  age: attr('number'),

  // associations
  citizenships: hasMany('citizenship'),
  languages: hasMany('language')

});