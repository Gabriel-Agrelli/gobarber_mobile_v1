import {Platform} from 'react-native';
import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
  if (Platform.OS === 'ios') {
    tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
      .configure()
      .useReactNative()
      .use(reactotronRedux())
      .use(reactotronSaga())
      .connect();
  } else {
    tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
      .configure({host: '192.168.100.138'})
      .useReactNative()
      .use(reactotronRedux())
      .use(reactotronSaga())
      .connect();
  }

  tron.clear();

  console.tron = tron;
}
