import Ember from 'ember';
import computed from 'ember-computed-decorators';
import { alias } from 'ember-computed-decorators';

const {
  Component
} = Ember;

export default Component.extend({

  // attributes
  tagName: 'img',
  attributeBindings: ['src'],
  user: null,
  src: '',
  size: 70,

  // computed
  @alias('user.facebook') facebook,
  @alias('facebook.uid') uid,

  // events
  async didInitAttrs() {
    await this.get('user');
    await this.get('facebook');
    const uid = this.get('uid');
    await uid;
    const size = this.get('size');
    this.set('src', `http://res.cloudinary.com/mygration/image/facebook/w_${size},h_${size},c_thumb,g_face,r_max/${uid}.png`.htmlSafe());
  },

});