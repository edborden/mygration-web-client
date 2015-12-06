import Ember from 'ember';
const {
  computed,
  Controller
} = Ember;

export default Controller.extend({
  year: computed(function() {
    let date = new Date();
    return date.getFullYear();
  })
});