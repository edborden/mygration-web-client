import Firebase from 'firebase';
import sinon from 'sinon';

export default function stubOAuth(authFixture) {

  // check for existing stubbing
  if (!Firebase.prototype.authWithOAuthPopup.restore) {
    sinon.stub(Firebase.prototype, 'authWithOAuthPopup', function(provider, cb) {
      setTimeout(function() {
        cb(null, authFixture[provider]);
      }, 0); // maintain async
    });
  }
}