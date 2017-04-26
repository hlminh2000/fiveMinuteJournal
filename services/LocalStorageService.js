import { AsyncStorage } from 'react-native';
import Storage from 'react-native-storage';

const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true,
  sync : {
	}
})

// Exported service package
const LocalStorageService = {
  saveUserToken: (idToken) => {
    console.log(idToken);
    storage.save({
      key: 'idToken',
      rawData: idToken,
      expires: null,
    });
  },
  getLastUserToken: () => {
    return storage.load({
      key: 'idToken',
      autoSync: true,
      syncInBackground: true,
      syncParams: {},
    })
  },
  clearUserToken: () => {
    storage.save({
      key: 'idToken',
      rawData: null,
      expires: null,
    });
  }
}
export default LocalStorageService;
