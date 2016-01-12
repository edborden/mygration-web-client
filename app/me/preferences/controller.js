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
      let detail = this.get('model');
      detail.set('age', null);
      detail.save();
    },

    removeEducation(education) {
      let detail = this.get('model');
      let educations = detail.get('educations');
      educations.removeObject(education);
      detail.save();
      this.get('notify').success(`Successfully removed ${education.get('degree').get('levelString')} degree.`);
    },

    removeLanguage(language) {
      let detail = this.get('model');
      let languages = detail.get('languages');
      languages.removeObject(language);
      detail.save();
      this.get('notify').success(`Successfully removed ${language.get('tongue').get('name')} language.`);
    },

    removeExperience(experience) {
      let detail = this.get('model');
      let experiences = detail.get('experiences');
      experiences.removeObject(experience);
      detail.save();
      this.get('notify').success(`Successfully removed ${experience.get('industry').get('name')} experience.`);
    },

    removeSpecialization(specialization) {
      let detail = this.get('model');
      let specializations = detail.get('specializations');
      specializations.removeObject(specialization);
      detail.save();
      this.get('notify').success(`Successfully removed ${specialization.get('name')} specialization.`);
    },

    removeInterest(interest) {
      let detail = this.get('model');
      let interests = detail.get('interests');
      interests.removeObject(interest);
      detail.save();
      this.get('notify').success(`Successfully removed ${interest.get('name')} interest.`);
    },

    removeCountry(country) {
      let detail = this.get('model');
      let countries = detail.get('countries');
      countries.removeObject(country);
      detail.save();
      this.get('notify').success(`Successfully removed ${country.get('demonym')} citizenship.`);
    }
  }

});