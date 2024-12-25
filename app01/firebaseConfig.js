// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import { getStorage } from "firebase/storage"; 
// Initialize Firebase
const app = initializeApp ({ 
 apiKey: "AIzaSyDDmnc-O6lxIwWDUeMFWHnvT5M7pt5xcJM", 
 authDomain: "nextproject-4da17.firebaseapp.com", 
 projectId: "nextproject-4da17", 
 storageBucket: "nextproject-4da17.appspot.com", 
 messagingSenderId: "311908023619", 
 appId: "1:311908023619:web:5c14d5bfb5c5305eb003f6"
}); 
 
// Firebase storage reference
const storage = getStorage(app); 
export default storage; 