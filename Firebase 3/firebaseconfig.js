
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAYkTSne_feiVND1RfUpA7Ze8SPLTA10hE",
  authDomain: "test-89ccc.firebaseapp.com",
  databaseURL: "https://test-89ccc-default-rtdb.firebaseio.com",
  projectId: "test-89ccc",
  storageBucket: "test-89ccc.appspot.com",
  messagingSenderId: "75095675756",
  appId: "1:75095675756:web:494ede0069add5f97fd949",
  measurementId: "G-9J0J0ZMRNW"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase();

export {database}