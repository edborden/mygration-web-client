import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({

  // attributes
  firstName: attr('string'),
  lastName: attr('string'),
  email: attr('string'),

  // associations
  facebook: belongsTo('facebook'),
  detail: belongsTo('detail')

});