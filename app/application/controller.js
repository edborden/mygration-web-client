import Ember from 'ember';
const {
  computed,
  computed: { alias },
  Controller,
  inject: { service }
} = Ember;

export default Controller.extend({

  // services
  meService: service('me'),

  // computed

  me: alias('meService.model'),

  noNav: computed('currentRouteName', function() {
    return ['login'].contains(this.get('currentRouteName'));
  }),

  year: computed(function() {
    let date = new Date();
    return date.getFullYear();
  })

});