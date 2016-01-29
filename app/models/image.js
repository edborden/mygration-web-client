import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({

  // attributes
  height: attr('number'),
  width: attr('number'),
  cloudinaryId: attr('string'),

  // associations
  listing: belongsTo('listing')

});