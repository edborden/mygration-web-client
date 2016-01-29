import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo,
  hasMany
} = DS;

export default Model.extend({

  // attributes
  title: attr('string'),
  description: attr('string'),
  price: attr('number'),

  // associations
  user: belongsTo('user'),
  images: hasMany('image')

});