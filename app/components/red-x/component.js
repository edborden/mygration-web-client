import Ember from 'ember';

const { 
  Component, 
} = Ember;

export default Component.extend({
  
  // attributes
  tagName: 'i',
  classNames: ['material-icons', 'red-text', 'click-fix'],
  action: 'remove',

  // actions
  click() {
    this.sendAction();
  }

});
