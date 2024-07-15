import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import 'dotenv/config'
const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: "script-flow-493fe",
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID
  };
   const app = initializeApp(firebaseConfig)
  export const db = getFirestore(app);
