import Ember from 'ember';
import ChildComponentSupport from 'ember-composability/mixins/child-component-support';
import MdTabs from 'mygration-web-client/components/md-tabs/component';
import { equal } from 'ember-computed-decorators';

const { Component, computed, computed: { oneWay } } = Ember;

export default Component.extend(ChildComponentSupport, {
  _parentComponentTypes: [MdTabs],
  tagName: 'li',

  classNames: ['materialize-tabs-tab', 'tab', 'col'],
  classNameBindings: ['_colClass'],

  colWidth: oneWay('composableParent.colWidth'),

  _colClass: computed('colWidth', function() {
    return `s${this.get('colWidth')}`;
  }),

  @equal('composableParent.selected', this) active,

  click() {
    let parent = this.get('composableParent');
    let action = this.get('action');
    if (action) {
      parent.sendAction(action);
    } else {
      parent.set('selected', this);
      parent._indicatorUpdater();
    }
  }

});
