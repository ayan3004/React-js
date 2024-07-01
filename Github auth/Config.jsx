
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,GithubAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBcDt1LTEmgWtJUqacj7slgW6HHwedrl24",
  authDomain: "newpr-f9caa.firebaseapp.com",
  projectId: "newpr-f9caa",
  storageBucket: "newpr-f9caa.appspot.com",
  messagingSenderId: "105996597019",
  appId: "1:105996597019:web:118a250ee4a4a24a4e45be",
  measurementId: "G-V03PVHV1X3"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, githubProvider };
