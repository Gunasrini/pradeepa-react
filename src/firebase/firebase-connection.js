import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAc3WXh7yHQcFm-odpa8mQpxOIN4EkAz7I",
    authDomain: "pradeepa-react.firebaseapp.com",
    projectId: "pradeepa-react",
    storageBucket: "pradeepa-react.appspot.com",
    messagingSenderId: "281118894722",
    appId: "1:281118894722:web:25b2523c9c8276f69de29b",
    measurementId: "G-SXTHFYQ3ZS"
};

const fire = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();


export { fire, auth }