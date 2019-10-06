import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyB5xaFjoOZC8attwY8Z4YdcQDv72Ki2YAA",
    authDomain: "m-city-517ff.firebaseapp.com",
    databaseURL: "https://m-city-517ff.firebaseio.com",
    projectId: "m-city-517ff",
    storageBucket: "",
    messagingSenderId: "363939185677",
    appId: "1:363939185677:web:6219c2e25ebff8b4"
  };

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');

export {
    firebase,
    firebaseMatches
}

// firebaseDB.ref('matches').once('value').then((snapshot)=>{
//     console.log(snapshot.val());
// })