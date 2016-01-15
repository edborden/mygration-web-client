import Ember from 'ember';

import DS from 'ember-data';
const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({

  // attributes
  current: attr('boolean'),

  // associations
  degree: belongsTo('degree'),
  field: belongsTo('field'),
  school: belongsTo('school')

});