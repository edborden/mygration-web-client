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
  profile: null,
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
      let profile = this.get('profile');
      let age = this.get('age');
      await age.save();
      profile.set('age', age);
      profile.save();
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