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
  detail: null,
  model: null,
  adding: false,

  // services
  store: service(),

  // computed
  @computed
  industries() {
    return this.get('store').findAll('industry');
  },

  @alias('model.industry') industry,
  @alias('model.role') role,
  @alias('model.length') length,

  // validations
  validations: {
    industry: {
      presence: true
    },
    role: {
      presence: true
    },
    length: {
      presence: true
    }
  },

  // actions
  actions: {
    add() {
      this.set('adding', true);
      this.set('model', this.get('store').createRecord('experience'));
    },

    async save() {
      let experience = this.get('model');
      await experience.save();
      let detail = this.get('detail');
      detail.get('experiences').pushObject(experience);
      detail.save();
      this.set('model', null);
      this.set('adding', false);
    }
  }

});