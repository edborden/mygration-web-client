import Ember from 'ember';
import { alias } from 'ember-computed-decorators';
import HasMe from 'mygration-web-client/mixins/has-me';

const {
  Component,
  inject: { service }
} = Ember;

export default Component.extend(HasMe, {

  // attributes
  owner: true,
  model: null,

  // services
  routing: service('-routing'),
  notify: service(),

  // actions
  actions: {
    editListing() {
      let routing = this.get('routing');
      let model = this.get('model');
      // error in routing service API, needs [] for params
      routing.transitionTo('me.listings.edit', [model]);
    },

    removeListing() {
      let me = this.get('me');
      let model = this.get('model');
      me.get('listings').removeObject(model);
      this.get('me').save();
      this.get('notify').success(`Successfully removed listing.`);
    }
  }

});