import DS from 'ember-data';
import computed from 'ember-computed-decorators';

const {
  Model,
  attr
} = DS;

export default Model.extend({

  // attributes
  gender: attr('number'),
  genderEnum: {
    0: 'female',
    1: 'male'
  },

  // computed
  @computed('gender')
  genderString() {
    let gender = this.get('gender');
    let genderEnum = this.get('genderEnum');
    return genderEnum[gender];
  }

});