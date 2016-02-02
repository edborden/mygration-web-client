import computed from 'ember-computed-decorators';
import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({

  // attributes
  height: attr('number'),
  width: attr('number'),
  cloudinaryId: attr('string'),

  // associations
  listing: belongsTo('listing'),

  // computed
  @computed
  msrc() {
    return `https://res.cloudinary.com/mygration/image/upload/w_90,h_70/${this.get('cloudinaryId')}.jpg`;
  },

  @computed
  src() {
    return `https://res.cloudinary.com/mygration/image/upload/${this.get('cloudinaryId')}.jpg`;
  }

});