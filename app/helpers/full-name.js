import Ember from 'ember';
const {
  Helper: { helper }
} = Ember;

export default helper(function([user]) {

  const firstName = user.get('firstName');
  const lastName = user.get('lastName');
  return `${firstName} ${lastName}`

});