import Ember from 'ember';
import computed from 'ember-computed-decorators';
import { alias } from 'ember-computed-decorators';
import EmberValidations from 'ember-validations';
const {
  isEmpty,
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
      let ageNumber = this.get('model');
      await this._setAge(ageNumber);
      let detail = this.get('detail');
      let age = this.get('age');
      await age.save();
      detail.set('age', age);
      detail.save();
      this.set('age', null);
      this.set('model', null);
      this.set('adding', false);
    }
  },

  // helpers
  _setAge(ageNumber) {
    let store = this.get('store');
    return new Ember.RSVP.Promise((resolve) => {
      store.query('age', {
        orderBy: 'years',
        equalTo: ageNumber
      }).then((queryResponse) => {
        let age;
        if (isEmpty(queryResponse)) {
          age = store.createRecord('age', { years: ageNumber });
        } else {
          age = queryResponse.get('firstObject');
        }
        this.set('age', age);
        resolve();
      });
    });
  }

});