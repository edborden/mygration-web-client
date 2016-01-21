import Ember from 'ember';
import ParentComponentSupport from 'ember-composability/mixins/parent-component-support';
import { alias } from 'ember-computed-decorators';

const { 
  get, 
  Component, 
  run: { debounce } 
} = Ember;

export default Component.extend(ParentComponentSupport, {
  classNames: ['materialize-tabs', 'row'],
  composableChildrenDebounceTime: 1,
  @alias('composableChildren.length') numTabs,
  colWidth: 2,

  selected: null,

  didInsertElement() {
    this._super(...arguments);
    this._indicatorUpdater(false);
  },

  _indicatorUpdater() {
    debounce(this, this._updateIndicatorPosition, 100);
  },

  _updateIndicatorPosition(animate=true) {
    if (!this.element) {
      return;
    }
    let tabComponent = this.get('selected');
    const tabSetRect = this.element.getBoundingClientRect();
    if (tabComponent) {
      const tabRect = tabComponent.element.getBoundingClientRect();

      const cssParams = {
        left: tabRect.left - tabSetRect.left,
        right: tabSetRect.right - tabRect.right
      };

      if (!animate) {
        this.$('.indicator').css(cssParams);
      } else {
        this.$('.indicator1').velocity(cssParams, { duration: 150 });
        this.$('.indicator2').velocity(cssParams, { duration: 150, delay: 40 });
      }
    }
  }

});
