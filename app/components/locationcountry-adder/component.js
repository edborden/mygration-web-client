import Ember from 'ember';
import computed from 'ember-computed-decorators';
import { alias } from 'ember-computed-decorators';
import EmberValidations from 'ember-validations';
const {
  Component,
  inject: { service }
} = Ember;

export default Component.extend(EmberValidations, {

  // attributes
  profile: null,
  model: null,

  // services
  store: service(),

  // computed
  @computed
  countries() {
    return this.get('store').findAll('country');
  },

  // validations
  validations: {
    model: {
      presence: true
    }
  },

  // actions
  actions: {

    async save() {
      let country = this.get('model');
      let profile = this.get('profile');
      profile.set('locationCountry', country);
      profile.get('content').save();
    }
  }

});