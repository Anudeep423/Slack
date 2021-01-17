import firebase from "firebase";

import "firebase/auth";
import "firebase/storage";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyAPKnYgLZd2Y8z55DiP05Rg1kD9ko2i3ag",
  authDomain: "react-slack-b99fa.firebaseapp.com",
  databaseURL: "https://react-slack-b99fa-default-rtdb.firebaseio.com",
  projectId: "react-slack-b99fa",
  storageBucket: "react-slack-b99fa.appspot.com",
  messagingSenderId: "374799516694",
  appId: "1:374799516694:web:5d6d2151b47c982d586137",
  measurementId: "G-61BWCKBG7M"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
  export default firebase;

//   export default firebaseConfig;