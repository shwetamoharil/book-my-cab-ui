// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBCwQ7moLHbD3FFU9qZte7BQawbnn5jBTs',
  authDomain: 'bmc-book-my-cab.firebaseapp.com',
  databaseURL: 'https://bmc-book-my-cab-default-rtdb.firebaseio.com',
  projectId: 'bmc-book-my-cab',
  storageBucket: 'bmc-book-my-cab.appspot.com',
  messagingSenderId: '8592100887',
  appId: '1:8592100887:web:cc22be7514e27c9c94d652',
};

export const environment = {
  production: false,
  baseUrl: 'https://bmc-book-my-cab-default-rtdb.firebaseio.com/',
  firebaseConfig,
};

// Initialize Firebase
export const firebaseAppSetup = initializeApp(environment);
