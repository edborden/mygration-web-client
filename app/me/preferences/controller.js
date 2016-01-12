import Ember from 'ember';

const {
  Controller,
  inject: { service }
} = Ember;

export default Controller.extend({

  // services
  notify: service(),

  // actions
  actions: {
    removeCountry(country) {
      let detail = this.get('model');
      let countries = detail.get('countries');
      countries.removeObject(country);
      detail.save();
      this.get('notify').success(`Successfully removed ${country.get('demonym')} citizenship.`);
    }
  }

});