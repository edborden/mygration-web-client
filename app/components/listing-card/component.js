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

    async removeListing() {
      let me = this.get('me');
      let model = this.get('model');
      me.get('listings').removeObject(model);
      me.save();
      console.log(me.get('listings').get('length'));
      if (!me.get('listings').get('length')) {
        let profile = me.get('profile');
        await profile;
        profile.set('hasListings', false);
        profile.get('content').save();
      }
      this.get('notify').success(`Successfully removed listing.`);
    }
  }

});