import Ember from 'ember';
import { alias } from 'ember-computed-decorators';
import HasMe from 'mygration-web-client/mixins/has-me';
import EmberValidations from 'ember-validations';

const {
  Component,
  inject: { service }
} = Ember;

export default Component.extend(HasMe, EmberValidations, {

  // services
  routing: service('-routing'),
  notify: service(),

  // computed
  @alias('model.title') title,
  @alias('model.description') description,
  @alias('model.price') price,

  // validations
  validations: {
    title: {
      presence: true
    },
    description: {
      presence: true
    },
    price: {
      presence: true
    }
  },

  // actions
  actions: {
    async save() {
      let model = this.get('model');
      let isNew = model.get('isNew');
      await model.save();
      if (isNew) {
        this.addToUser(model);
        this.setHasListings();
      }
      this.get('routing').transitionTo('me.listings');
      this.get('notify').success(`Successfully saved listing.`);
    }
  },

  // helpers
  addToUser(model) {
    let me = this.get('me');
    let listings = me.get('listings');
    listings.pushObject(model);
    me.save();
  },

  async setHasListings() {
    let profile = this.get('me').get('profile');
    await profile;
    profile.set('hasListings', true);
    profile.get('content').save();
  }

});