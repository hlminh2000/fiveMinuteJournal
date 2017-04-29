import Firebase from './Firebase.js';



var API = {
  updateUserFirstName: (firstName) => {
    const currentUser = Firebase.auth().currentUser;
    const database = Firebase.database();
    return database.ref('userInfo/' + currentUser.uid + "/firstName").set(firstName)
  },
  updateUserLastName: (lastName) => {
    const currentUser = Firebase.auth().currentUser;
    const database = Firebase.database();
    return database.ref('userInfo/' + currentUser.uid + "/lastName").set(lastName)
  },
  updateUserEmail: (email) => {
    const currentUser = Firebase.auth().currentUser;
    return currentUser.updateEmail(email)
  },
  getCurrentUserInfoOnce: () => {
    return new Promise(function(resolve, reject) {
      const currentUser = Firebase.auth().currentUser;
      const database = Firebase.database();
      return database.ref('userInfo/' + currentUser.uid).once('value', (userInfo) => {
        if(currentUser){
          resolve(currentUser);
        } else {
          reject("RETRIEVAL_ERROR");
        }
      })
    });
  }
}

export default API;
