import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.authenticatedRoute('me', function() {
    this.route('profile');
    this.route('listings', function() {
      this.route('add');
      this.route('edit', { path: 'edit/:listing_id' });
    });
  });
  this.route('go');
  this.route('listing', { path: 'listing/:listing_id' });
});

export default Router;
