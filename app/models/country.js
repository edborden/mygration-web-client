import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({

  // attributes
  demonym: attr('string'),

  /*
    name: {
      common: "Aruba"
    }
  */
  name: attr()

});