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
  click() {
    const owner = this.get('owner');
    if (owner) {
      this._editListing();
    } else {
      this._viewListing();
    }
  },

  // helpers
  _editListing() {
    let routing = this.get('routing');
    let model = this.get('model');
    // error in routing service API, needs [] for params
    routing.transitionTo('me.listings.edit', [model]);
  },

  _viewListing() {
    let routing = this.get('routing');
    let model = this.get('model');
    // error in routing service API, needs [] for params
    routing.transitionTo('listing', [model]);    
  }

});