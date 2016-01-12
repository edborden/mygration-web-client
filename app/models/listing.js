import DS from 'ember-data';

const {
  Model,
  attr
} = DS;

export default Model.extend({

  // attributes
  title: attr('string'),
  description: attr('string'),
  price: attr('number')

});