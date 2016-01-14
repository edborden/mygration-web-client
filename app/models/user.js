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
  gender: attr('number'),
  genderEnum: {
    0: 'female',
    1: 'male'
  },

  // associations
  facebook: belongsTo('facebook'),
  detail: belongsTo('detail'),
  listings: hasMany('listing'),

  // computed
  @computed('gender')
  genderString() {
    let gender = this.get('gender');
    let genderEnum = this.get('genderEnum');
    return genderEnum[gender];
  }

});