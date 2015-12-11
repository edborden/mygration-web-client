import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({

  uid: attr('string'),
  pic: attr('string'),
  token: attr('string'),

  // relationships
  user: belongsTo('user')

});