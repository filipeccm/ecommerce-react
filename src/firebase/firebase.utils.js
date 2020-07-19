import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCgkbsuEe9vfhEVPlFfYTV0mLO2W3y3cp0',
  authDomain: 'ecommerce-db-934a5.firebaseapp.com',
  databaseURL: 'https://ecommerce-db-934a5.firebaseio.com',
  projectId: 'ecommerce-db-934a5',
  storageBucket: 'ecommerce-db-934a5.appspot.com',
  messagingSenderId: '802503241039',
  appId: '1:802503241039:web:e3234a8112b9c63171293a',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
