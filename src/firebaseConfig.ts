import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3m8OoZeCqvxre6VHD0dqsRpG4TebZxmk",
  authDomain: "movie-45a0a.firebaseapp.com",
  databaseURL: "https://movie-45a0a-default-rtdb.firebaseio.com",
  projectId: "movie-45a0a",
  storageBucket: "movie-45a0a.appspot.com",
  messagingSenderId: "233957286085",
  appId: "1:233957286085:web:bdf0a9c675cf3047f790ac",
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
