import { AccessToken, LoginManager } from 'react-native-fbsdk';


// TODO: refactor for federated login

const FacebookApi = {
  requestAccessToken : () => {
    return LoginManager
      .logInWithReadPermissions(['public_profile', 'email'])
      .then((result) => {
        if (result.isCancelled) {
          return Promise.resolve('cancelled');
        }
        console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);
        return AccessToken.getCurrentAccessToken();
      })
  }
}


export default FacebookApi;
