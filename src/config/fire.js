import firebase from 'firebase';
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyAqyqW9Dl20CoWGi3owy-zlE1CICwYlDKM",
    authDomain: "contacts-e0037.firebaseapp.com",
    projectId: "contacts-e0037",
    storageBucket: "contacts-e0037.appspot.com",
    messagingSenderId: "505615787497",
    appId: "1:505615787497:web:037ccb5cb2911b43efd778",
    measurementId: "G-75SKJ2CEX4"
};


const fire = firebase.initializeApp(firebaseConfig);

export default fire;


