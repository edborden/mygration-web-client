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
  adding: false,

  // services
  store: service(),

  // computed
  @computed
  genders() {
    return this.get('store').findAll('gender');
  },

  // validations
  validations: {
    model: {
      presence: true
    }
  },

  // actions
  actions: {
    add() {
      this.set('adding', true);
    },

    async save() {
      let gender = this.get('model');
      let profile = this.get('profile');
      profile.set('gender', gender);
      profile.save();
      this.set('model', null);
      this.set('adding', false);
    }
  }

});