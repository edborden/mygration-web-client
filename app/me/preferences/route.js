import Ember from 'ember';
const {
  Route,
  RSVP
} = Ember;

export default Route.extend({

  model() {
    let store = this.get('store');
    return new RSVP.hash({
      industries: store.findAll('industry'),
      detail: store.createRecord('detail')
    });
  }

});