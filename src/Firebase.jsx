import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDA_RDGXyU_raiXnT2Mbu9RuxCQx04fjsA",
  authDomain: "fir-auth-94880.firebaseapp.com",
  projectId: "fir-auth-94880",
  storageBucket: "fir-auth-94880.appspot.com",
  messagingSenderId: "485588658297",
  appId: "1:485588658297:web:178e256e0b43223cf0cca8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)