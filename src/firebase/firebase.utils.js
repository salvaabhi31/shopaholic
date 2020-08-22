import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDLm2u23mgaYHE1FKen7SwEh2QKdsLqYQs",
    authDomain: "shopaholic-db.firebaseapp.com",
    databaseURL: "https://shopaholic-db.firebaseio.com",
    projectId: "shopaholic-db",
    storageBucket: "shopaholic-db.appspot.com",
    messagingSenderId: "839843895818",
    appId: "1:839843895818:web:4289469486f511ff16ddf3",
    measurementId: "G-3ERN0FSJ2P"
  };
  
  
  firebase.initializeApp(firebaseConfig);
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
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
      
  };
  
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;