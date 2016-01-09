import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.authenticatedRoute('me', function() {
    this.route('preferences');
    this.route('payment');
  });
});

export default Router;
