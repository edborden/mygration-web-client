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
  attributeName: null,
  attributeType: 'text',

  // services
  store: service(),

  // validations
  validations: {
    name: {
      presence: true
    }
  },

  // computed
  @computed('attributeName')
  placeHolder() {
    let attributeName = this.get('attributeName');
    return `Enter ${attributeName}`;
  },

  @alias('model.name') name,

  // actions
  actions: {
    add() {
      this.set('adding', true);
      this.set('model', this.get('store').createRecord(this.get('attributeName')));
    },

    async save() {
      let attribute = this.get('model');
      await attribute.save();
      let profile = this.get('profile');
      let collectionName = this.get('attributeName').pluralize();
      profile.get(collectionName).pushObject(attribute);
      profile.save();
      this.set('model', null);
      this.set('adding', false);
    }
  }

});