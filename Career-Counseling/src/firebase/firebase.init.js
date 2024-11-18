

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyB_OOFATCft9ZKrGWg7FHLAp5ZQ6fjJNjA",
  authDomain: "career-counseling-a11e1.firebaseapp.com",
  projectId: "career-counseling-a11e1",
  storageBucket: "career-counseling-a11e1.firebasestorage.app",
  messagingSenderId: "198078191520",
  appId: "1:198078191520:web:194649df66b8bd6b90f6c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);

export {auth};