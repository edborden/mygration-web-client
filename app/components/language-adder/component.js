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
  tongues() {
    return this.get('store').findAll('tongue');
  },

  @alias('model.tongue') tongue,

  @alias('model.proficiency') proficiency,

  // validations
  validations: {
    tongue: {
      presence: true
    },
    proficiency: {
      presence: true
    }
  },

  // actions
  actions: {
    add() {
      this.set('adding', true);
      this.set('model', this.get('store').createRecord('language'));
    },

    async save() {
      let language = this.get('model');
      await language.save();
      let profile = this.get('profile');
      profile.get('languages').pushObject(language);
      profile.save();
      this.set('model', null);
      this.set('adding', false);
    }
  }

});