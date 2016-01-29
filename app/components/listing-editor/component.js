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
  store: service(),

  // attributes
  model: null,
  isNew: false,

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
    },

    async remove() {
      let me = this.get('me');
      let model = this.get('model');
      me.get('listings').removeObject(model);
      me.save();
      if (!me.get('listings').get('length')) {
        let profile = me.get('profile');
        await profile;
        profile.set('hasListings', false);
        profile.get('content').save();
      }
      model.destroyRecord();
      this.get('routing').transitionTo('me.listings');
      this.get('notify').success(`Successfully removed listing.`);
    },

    file() {
      cloudinary.openUploadWidget({
        upload_preset: 'qx7zq1cd',
        cropping: 'server'
      }, (error, result) => {
        console.log(result);
        // Listing has to be persisted before image
        const listing = this.get('model');
        const image = this.get('store').createRecord('image', {
          cloudinaryId: result[0].public_id,
          width: result[0].width,
          height: result[0].height,
          listing: listing
        });
        listing.get('images').pushObject(image);
        listing.save().then( () => {
          image.save();
          console.log('image saved');
        });
      });
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