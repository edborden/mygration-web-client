import Ember from 'ember';
import computed from 'ember-computed-decorators';
import { alias } from 'ember-computed-decorators';
import EmberValidations from 'ember-validations';
// import { mailchimpSubscriber } from 'mygration-web-client/utils/iron-worker-handler'

const {
  Controller,
  inject: { service }
} = Ember;

export default Controller.extend(EmberValidations, {

  // attributes
  email: null,

  // services
  notify: service(),

  // validations
  validations: {
    email: {
      format: {
        with: /@/,
        message: "Doesn't look like a valid email. Please try again."
      }
    }
  },

  // actions
  actions: {

    subscribe() {
      if (this.get('isValid')) {
        let webhookurl = 'https://worker-aws-us-east-1.iron.io/2/projects/567a0d82f254f20006000195/tasks/webhook?code_name=mailchimp-subscriber&oauth=nRqryOE2PlgNPJh9GkgX';
        let data = { email: this.get('email') };
        // refactor with ember-ajax
        Ember.$.ajax({
          url: webhookurl,
          type: 'post',
          data: JSON.stringify(data),
          dataType: 'json',
          success: (data) => {
            this.get('notify').success("You've been successfully subscribed!");
          },
          error(data) {
            console.log('error', data);
          }
        });
      } else {
        let error = this.get('errors').get('email').get('firstObject');
        this.get('notify').error(error);
      }
      this.set('email', null);
    }
  }

});