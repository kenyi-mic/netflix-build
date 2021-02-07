import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBlwT_e-Tz_HWDxiHmcR85mM7TlcYY0vJY",
  authDomain: "netflix-build-5ff32.firebaseapp.com",
  projectId: "netflix-build-5ff32",
  storageBucket: "netflix-build-5ff32.appspot.com",
  messagingSenderId: "248462876171",
  appId: "1:248462876171:web:8e8ff0fbf9c7583ccf310e",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
