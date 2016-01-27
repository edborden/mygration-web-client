import Ember from 'ember';
import HasMe from 'mygration-web-client/mixins/has-me';

const {
  Route,
  isBlank,
  inject: { service }
} = Ember;

export default Route.extend(HasMe, {

  // services
  notify: service(),

  // events
  beforeModel() {
    const profile = this.get('me').get('profile');
    if (isBlank(profile)) {
      this.transitionTo('me.profile');
      this.get('notify').success('You must first fill out your profile before creating a listing.');
    }
  },

  model() {
    const me = this.get('me');
    const listing = this.get('store').createRecord('listing');
    listing.set('user', me);
    return listing;
  }

});