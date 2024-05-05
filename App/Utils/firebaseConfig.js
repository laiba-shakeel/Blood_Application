import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { App } from './App';
import { Firebase } from '@react-native-firebase/app';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

Firebase.initializeApp(firebaseConfig);

AppRegistry.registerComponent(appName, () => App);