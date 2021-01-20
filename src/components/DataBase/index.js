import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyC2v4Jg6ZvoJVcKjiqlZNceseETNs2HtNU",
    authDomain: "gg-react.firebaseapp.com",
    projectId: "gg-react",
    storageBucket: "gg-react.appspot.com",
    messagingSenderId: "504370248248",
    appId: "1:504370248248:web:cbd2bc40a2571fca1904cd"
})

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}
