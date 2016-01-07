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
  proficiency: attr('number'),
  proficiencyEnum: {
    1: "Elementary",
    2: "Professional",
    3: "Native/Bilingual"
  },

  // associations
  tongue: belongsTo('tongue'),

  // computed
  @computed('proficiency')
  proficiencyString() {
    let proficiency = this.get('proficiency');
    let proficiencyEnum = this.get('proficiencyEnum');
    return proficiencyEnum[proficiency];
  })

});