import Ember from 'ember';

const {
  Controller,
  inject: { service }
} = Ember;

export default Controller.extend({

  // services
  notify: service(),

  // actions
  actions: {
    removeAge() {
      let profile = this.get('model');
      profile.set('age', null);
      profile.save();
    },

    removeGender() {
      let profile = this.get('model');
      profile.set('gender', null);
      profile.save();
    },

    removeEducation(education) {
      let profile = this.get('model');
      let educations = profile.get('educations');
      educations.removeObject(education);
      profile.save();
      this.get('notify').success(`Successfully removed ${education.get('degree').get('levelString')} degree.`);
    },

    removeLanguage(language) {
      let profile = this.get('model');
      let languages = profile.get('languages');
      languages.removeObject(language);
      profile.save();
      this.get('notify').success(`Successfully removed ${language.get('tongue').get('name')} language.`);
    },

    removeExperience(experience) {
      let profile = this.get('model');
      let experiences = profile.get('experiences');
      experiences.removeObject(experience);
      profile.save();
      this.get('notify').success(`Successfully removed ${experience.get('industry').get('name')} experience.`);
    },

    removeSpecialization(specialization) {
      let profile = this.get('model');
      let specializations = profile.get('specializations');
      specializations.removeObject(specialization);
      profile.save();
      this.get('notify').success(`Successfully removed ${specialization.get('name')} specialization.`);
    },

    removeInterest(interest) {
      let profile = this.get('model');
      let interests = profile.get('interests');
      interests.removeObject(interest);
      profile.save();
      this.get('notify').success(`Successfully removed ${interest.get('name')} interest.`);
    },

    removeCountry(country) {
      let profile = this.get('model');
      let countries = profile.get('countries');
      countries.removeObject(country);
      profile.save();
      this.get('notify').success(`Successfully removed ${country.get('demonym')} citizenship.`);
    }
  }

});