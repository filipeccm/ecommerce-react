import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useReducer } from 'react';

const config = {
  apiKey: 'AIzaSyCgkbsuEe9vfhEVPlFfYTV0mLO2W3y3cp0',
  authDomain: 'ecommerce-db-934a5.firebaseapp.com',
  databaseURL: 'https://ecommerce-db-934a5.firebaseio.com',
  projectId: 'ecommerce-db-934a5',
  storageBucket: 'ecommerce-db-934a5.appspot.com',
  messagingSenderId: '802503241039',
  appId: '1:802503241039:web:e3234a8112b9c63171293a',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
