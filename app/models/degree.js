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
  level: attr('number'),
  levelEnum: {
    0: 'Vocational',
    1: 'Associate',
    2: "Bachelor's",
    3: "Master's",
    4: 'Doctoral'
  },

  // computed
  @computed('level')
  levelString() {
    let level = this.get('level');
    let levelEnum = this.get('levelEnum');
    return levelEnum[level];
  }

});