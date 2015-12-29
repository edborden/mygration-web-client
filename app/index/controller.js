import Ember from 'ember';
import computed from 'ember-computed-decorators';
import { alias } from 'ember-computed-decorators';
// import { mailchimpSubscriber } from 'mygration-web-client/utils/iron-worker-handler'

const {
  Controller,
  inject: { service }
} = Ember;

export default Controller.extend({

  // attributes
  email: null,

  // actions
  actions: {
    subscribe() {
      let webhookurl = 'https://worker-aws-us-east-1.iron.io/2/projects/567a0d82f254f20006000195/tasks/webhook?code_name=mailchimp-subscriber&oauth=nRqryOE2PlgNPJh9GkgX';
      let data = { email: this.get('email') };
      // refactor with ember-ajax
      Ember.$.ajax({
        url: webhookurl,
        type: 'post',
        data: JSON.stringify(data),
        dataType: 'json',
        success(data) {
          console.log('success', data);
        },
        error(data) {
          console.log('error', data);
        }
      });
      this.set('email', null);
    }
  }

});