import Ember from 'ember';
import ChildComponentSupport from 'ember-composability/mixins/child-component-support';
import MdTabs from 'mygration-web-client/components/md-tabs/component';
import computed from 'ember-computed-decorators';
import { equal, oneWay } from 'ember-computed-decorators';

const { Component } = Ember;

export default Component.extend(ChildComponentSupport, {
  _parentComponentTypes: [MdTabs],
  tagName: 'li',

  classNames: ['materialize-tabs-tab', 'tab', 'col', 's2'],

  @oneWay('composableParent.colWidth') colWidth,

  click() {
    let action = this.get('action');
    if (action) {
      let parent = this.get('composableParent');
      let parentAction = `_action_${action}`;
      parent.set(parentAction, action);
      parent.sendAction(parentAction);
    } else {
      this.$().tabs('select_tab', this.elementId);
    }
  }

});
