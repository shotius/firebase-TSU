import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyBoTQiWPh_K3s-YBNY96lurhLVAaj4gRSw",
  authDomain: "fir-tsu.firebaseapp.com",
  databaseURL: "https://fir-tsu-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fir-tsu",
  storageBucket: "fir-tsu.appspot.com",
  messagingSenderId: "546594983316",
  appId: "1:546594983316:web:3afff71a867ade9be0d381",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
