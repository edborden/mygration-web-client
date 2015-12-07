import Ember from 'ember';
const {
  computed,
  Controller
} = Ember;

export default Controller.extend({

  // COMPUTED

  noNav: computed('currentRouteName', function() {
    console.log(this.get('currentRouteName'));
    return ['login'].contains(this.get('currentRouteName'));
  }),

  year: computed(function() {
    let date = new Date();
    return date.getFullYear();
  })

});