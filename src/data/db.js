// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3B4oBF9hJ7CSynVAkQzVUhAOMDZKyo6I",
  authDomain: "fermenta-e-commerce.firebaseapp.com",
  projectId: "fermenta-e-commerce",
  storageBucket: "fermenta-e-commerce.firebasestorage.app",
  messagingSenderId: "900031478336",
  appId: "1:900031478336:web:99e6f8ca45feadb4e9fda5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;