import Ember from 'ember';
import computed from 'ember-computed-decorators';
import { alias } from 'ember-computed-decorators';
import EmberValidations from 'ember-validations';

const {
  Controller,
  inject: { service }
} = Ember;

export default Controller.extend(EmberValidations, {

  // attributes
  email: null,

  // services
  notify: service(),
  iron: service(),

  // validations
  validations: {
    email: {
      format: {
        with: /@/,
        message: "Doesn't look like a valid email. Please try again."
      }
    }
  },

  // actions
  actions: {

    subscribe() {
      if (this.get('isValid')) {
        this.get('iron').subscribe(this.get('email'));
      } else {
        let error = this.get('errors').get('email').get('firstObject');
        this.get('notify').error(error);
      }
      this.set('email', null);
    }
  }

});