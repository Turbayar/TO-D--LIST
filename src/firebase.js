import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCmIwQAKiJWYm0_EItRhXCfl4Y7VOzMpEU",
    authDomain: "clickbattle-c0196.firebaseapp.com",
    projectId: "clickbattle-c0196",
    storageBucket: "clickbattle-c0196.appspot.com",
    messagingSenderId: "558570261908",
    appId: "1:558570261908:web:6d61140837ba0d783f9381"
  };

 const app = firebase.initializeApp(firebaseConfig);

 export const db = firebase.firestore();