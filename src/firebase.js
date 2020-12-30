import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID
  };

  const app = firebase.initializeApp(firebaseConfig)
  
  export const db = firebase.firestore(app)
  export const auth = app.auth()
  export const storageRef = firebase.storage().ref();
  export const provider = new firebase.auth.GoogleAuthProvider();
  export default app