import Ember from 'ember';
import HasMe from 'mygration-web-client/mixins/has-me';

const {
  Controller,
  inject: { service }
} = Ember;

export default Controller.extend(HasMe, {

  // services
  notify: service(),

  // actions
  actions: {
    editListing(listing) {
      this.transitionToRoute('me.listings.edit', listing);
    },

    removeListing(listing) {
      let listings = this.get('model');
      listings.removeObject(listing);
      this.get('me').save();
      this.get('notify').success(`Successfully removed listing.`);
    }
  }

});