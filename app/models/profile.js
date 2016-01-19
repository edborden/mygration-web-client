import DS from 'ember-data';
import HasMe from 'mygration-web-client/mixins/has-me';
import { equal, alias } from 'ember-computed-decorators';

const {
  Model,
  attr,
  belongsTo,
  hasMany
} = DS;

export default Model.extend(HasMe, {

  // attributes
  hasListings: attr('boolean', { defaultValue: false }),

  // associations
  age: belongsTo('age'),
  countries: hasMany('country'),
  languages: hasMany('language'),
  experiences: hasMany('experience'),
  specializations: hasMany('specialization'),
  interests: hasMany('interest'),
  educations: hasMany('education'),
  user: belongsTo('user'),
  locationCountry: belongsTo('country'),

  // computed
  @equal('specializations.length', 2) maxSpecializations,
  @equal('interests.length', 2) maxInterests,
  @alias('locationCountry.name.common') locationCommonName,

  // events
  /*
    we can't save an empty profile to firebase, there has to be some content,
    so the profile will get created with the first att/association that gets
    added to it. that model won't know about this model's status, so we use
    this hook to automatically add the profile to the user on creation.
  */
  didCreate() {
    let me = this.get('me');
    me.set('profile', this);
    me.save();
  }

});