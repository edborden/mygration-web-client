import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({

  // ATTRIBUTES

  firstName: attr('string'),
  lastName: attr('string'),
  email: attr('string'),

  // ASSOCIATIONS

  facebook: belongsTo('facebook')

});