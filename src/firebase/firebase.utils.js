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
  
  
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;