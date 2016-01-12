import Ember from 'ember';
import computed from 'ember-computed-decorators';

import DS from 'ember-data';
const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({

  // attributes
  length: attr('number'),
  lengthEnum: {
    0: '1 - 2 Years',
    1: '2 - 4 Years',
    2: '5+ Years'
  },
  role: attr('string'),

  // associations
  industry: belongsTo('industry'),

  // computed
  @computed('length')
  lengthString() {
    let length = this.get('length');
    let lengthEnum = this.get('lengthEnum');
    return lengthEnum[length];
  }

});