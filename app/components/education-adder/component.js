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
  degrees() {
    return this.get('store').findAll('degree');
  },

  /*
  @computed
  fields() {
    return this.get('store').findAll('field');
  },

  @computed
  schools() {
    return this.get('store').findAll('school');
  },
  */

  @alias('model.degree') degree,
  @alias('model.field') field,
  @alias('model.school') school,

  // validations
  validations: {
    degree: {
      presence: true
    },
    field: {
      presence: true
    },
    school: {
      presence: true
    }
  },

  // actions
  actions: {
    add() {
      let store = this.get('store');
      let field = store.createRecord('field');
      let school = store.createRecord('school');
      let education = store.createRecord('education');
      education.set('field', field);
      education.set('school', school);
      this.set('model', education);
      this.set('adding', true);
    },

    async save() {
      let field = this.get('field');
      let school = this.get('school');
      let education = this.get('model');
      await Ember.RSVP.all([field.get('content').save(), school.get('content').save(), education.save()]);
      let detail = this.get('detail');
      detail.get('educations').pushObject(education);
      detail.save();
      this.set('model', null);
      this.set('adding', false);
    }
  }

});