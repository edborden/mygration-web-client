import Ember from 'ember';
const {
  Service,
  inject: { service }
} = Ember;

export default Service.extend({

  // services
  ajax: service(),
  notify: service(),

  subscribe(email) {
    let webhookurl = 'https://worker-aws-us-east-1.iron.io/2/projects/567a0d82f254f20006000195/tasks/webhook?code_name=mailchimp-subscriber&oauth=nRqryOE2PlgNPJh9GkgX';
    let data = { email };
    this.get('ajax').post(webhookurl, {
      data: JSON.stringify(data)
    }).then(() => {
      this.get('notify').success("You've been successfully subscribed!");
    });
  }

});