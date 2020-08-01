import * as firebase from 'firebase/app';
import 'firebase/storage'; // store our images
import 'firebase/firestore'; // database

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyB_Nk-CK60S7YS31fm1qNdqs6ZKOTSscUQ',
  authDomain: 'julles-firegram.firebaseapp.com',
  databaseURL: 'https://julles-firegram.firebaseio.com',
  projectId: 'julles-firegram',
  storageBucket: 'julles-firegram.appspot.com',
  messagingSenderId: '605385248621',
  appId: '1:605385248621:web:8d3e8daef3b098237c5464',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
