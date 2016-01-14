import DS from 'ember-data';
import computed from 'ember-computed-decorators';

const {
  Model,
  attr,
  belongsTo,
  hasMany
} = DS;

export default Model.extend({

  // attributes
  firstName: attr('string'),
  lastName: attr('string'),
  email: attr('string'),

  // associations
  facebook: belongsTo('facebook'),
  detail: belongsTo('detail'),
  listings: hasMany('listing'),
  gender: belongsTo('gender')

});