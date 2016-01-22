import Ember from 'ember';

const {
  Component
} = Ember;

export default Component.extend({

  // attributes
  tagName: 'i',
  classNames: ['material-icons', 'red-text', 'click-fix', 'left'],
  action: 'remove',

  // actions
  click() {
    this.sendAction();
  }

});
