import Ember from 'ember';
import { alias } from 'ember-computed-decorators';
import HasMe from 'mygration-web-client/mixins/has-me';
import EmberValidations from 'ember-validations';

const {
  Controller
} = Ember;

export default Controller.extend(HasMe, EmberValidations, {

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
      let me = this.get('me');
      await model.save();
      let listings = me.get('listings');
      listings.pushObject(model);
      me.save();
      this.transitionToRoute('me.listings');
    }
  }

});