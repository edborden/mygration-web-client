import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    launchGallery(item) {
      // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
      let pSwipe = new PhotoSwipe(
        this.$('.pswp')[0],
        PhotoSwipeUI_Default,
        this._vanillaItems(),
        null
      );
      pSwipe.init();
    }
  },

  _vanillaItems() {
    let items = this.get('items');
    let vanillaItems = items.map(function(item) {
      return {
        src: item.get('src'),
        w: item.get('width'),
        h: item.get('height'),
        msrc: item.get('msrc')
      };
    });
    return vanillaItems;
  }

});
