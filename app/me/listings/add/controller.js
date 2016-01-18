import Ember from 'ember';
import { alias } from 'ember-computed-decorators';
import HasMe from 'mygration-web-client/mixins/has-me';

const {
  Controller
} = Ember;

export default Controller.extend(HasMe, {

  // computed
  @alias('me.profile.locationCountry') locationCountry

});