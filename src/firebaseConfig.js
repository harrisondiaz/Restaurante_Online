// src/firebaseConfig.js
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA4je8Hj4YE7QdXc45JxFKMrIc5SA18d84",
    authDomain: "restaonline-77461.firebaseapp.com",
    projectId: "restaonline-77461",
    storageBucket: "restaonline-77461.appspot.com",
    messagingSenderId: "835150019775",
    appId: "1:835150019775:web:adfb916bd5c185d9cd9a0a"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
