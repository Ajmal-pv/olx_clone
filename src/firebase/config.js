import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyD6DmQEfghK3C2gD9umech1yllr4IsS4dU",
    authDomain: "olx-clone-c404f.firebaseapp.com",
    projectId: "olx-clone-c404f",
    storageBucket: "olx-clone-c404f.appspot.com",
    messagingSenderId: "37816436162",
    appId: "1:37816436162:web:494a026677a51f4810825b",
    measurementId: "G-C60YS0ZFK9"
  };

 export default firebase.initializeApp(firebaseConfig)