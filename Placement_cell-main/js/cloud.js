import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyDfjtCim0jTRtgIShY1WAtwt1BTWNXo9eM",
  authDomain: "pcell-f6f1b.firebaseapp.com",
  databaseURL: "https://pcell-f6f1b-default-rtdb.firebaseio.com",
  projectId: "pcell-f6f1b",
  storageBucket: "pcell-f6f1b.appspot.com",
  messagingSenderId: "1003035349585",
  appId: "1:1003035349585:web:26cbcea3b1b56a63b85e70",
  measurementId: "G-0MSMZ4X244",
  storageBucket: 'gs://pcell-f6f1b.appspot.com/'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

// Create a reference to 'mountains.jpg'
const mountainsRef = ref(storage, 'D:/placement_pro/Placement_cell-main/js/gallery2.jpg');

// Create a reference to 'images/mountains.jpg'
const mountainImagesRef = ref(storage, 'images/gallery2.jpg');

// While the file names are the same, the references point to different files
mountainsRef.name === mountainImagesRef.name;           // true
mountainsRef.fullPath === mountainImagesRef.fullPath;   // false 


// 'file' comes from the Blob or File API
uploadBytes(mountainsRef, file).then((snapshot) => {
  console.log('Uploaded a blob or file!');
});
