import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBOPxS5nBcaeI7vywUJqb6OhzHrV2sslek",
  authDomain: "mine--clone.firebaseapp.com",
  databaseURL: "https://mine--clone-default-rtdb.firebaseio.com",
  projectId: "mine--clone",
  storageBucket: "mine--clone.appspot.com",
  messagingSenderId: "104078932876",
  appId: "1:104078932876:web:e45bb8b1274e772aeab4a9"
};
const app = initializeApp(firebaseConfig);
export const db=getDatabase(app)
export const auth=getAuth();