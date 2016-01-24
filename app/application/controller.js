import Ember from 'ember';
import computed from 'ember-computed-decorators';
import HasMe from 'mygration-web-client/mixins/has-me';

const {
  Controller
} = Ember;

export default Controller.extend(HasMe, {

  // computed
  @computed('currentRouteName')
  noNav() {
    return ['login', 'index'].contains(this.get('currentRouteName'));
  },

  @computed('currentRouteName')
  noContainer() {
    return ['index', 'login'].contains(this.get('currentRouteName'));
  },

  @computed('currentRouteName')
  noFooter() {
    return ['index', 'login'].contains(this.get('currentRouteName'));
  },

  @computed
  year() {
    let date = new Date();
    return date.getFullYear();
  }

});