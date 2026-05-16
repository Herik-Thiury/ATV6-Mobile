import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyB4ZePYaBFIPDDeTD5QWyec7nczdY8VQuU",
  authDomain: "atv7-mobile.firebaseapp.com",
  projectId: "atv7-mobile",
  storageBucket: "atv7-mobile.firebasestorage.app",
  messagingSenderId: "173542694430",
  appId: "1:173542694430:web:cc7a8268cac20fc7fbd80f",
  measurementId: "G-Y3Z82B4346"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});