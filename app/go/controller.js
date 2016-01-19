import Ember from 'ember';
import { mapBy, uniq } from 'ember-computed-decorators';
import HasMe from 'mygration-web-client/mixins/has-me';

const {
  Controller
} = Ember;

export default Controller.extend(HasMe, {

  // computed
  @mapBy('model', 'locationCommonName') locationCommonNames,
  @uniq('locationCommonNames') uniqueLocationCommonNames

});