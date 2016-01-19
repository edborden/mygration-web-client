import Ember from 'ember';

const {
  Component,
  inject: { service },
  computed: { filter }
} = Ember;

export default Component.extend({

  // attributes
  countryName: null,
  allProfiles: null,

  // computed
  filtered: filter('allProfiles', function(profile) {
    let countryName = this.get('countryName');
    return profile.get('locationCommonName') === countryName;
  })

});