
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDXnkVb37sDnXyeA0MLzvBWn9nJaKm8A1c",
    authDomain: "outboardmotors-c1b35.firebaseapp.com",
    projectId: "outboardmotors-c1b35",
    storageBucket: "outboardmotors-c1b35.appspot.com",
     messagingSenderId: "719019238412",
    appId: "1:719019238412:web:36fc0138e08e3e5e253a29"
    };

   initializeApp(firebaseConfig);
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <App />
    
    
);
