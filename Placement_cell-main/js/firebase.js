import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDfjtCim0jTRtgIShY1WAtwt1BTWNXo9eM",
    authDomain: "pcell-f6f1b.firebaseapp.com",
    databaseURL: "https://pcell-f6f1b-default-rtdb.firebaseio.com",
    projectId: "pcell-f6f1b",
    storageBucket: "pcell-f6f1b.appspot.com",
    messagingSenderId: "1003035349585",
    appId: "1:1003035349585:web:26cbcea3b1b56a63b85e70",
    measurementId: "G-0MSMZ4X244"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

export { db };
