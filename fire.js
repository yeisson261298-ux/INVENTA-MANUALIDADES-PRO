// fire.js - INVENTA MANUALIDADES - Firebase centralizado
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCmSEMVVBmrxRGOIQ9vJkghqkpqR_gKYis",
  authDomain: "manualidades-pwa.firebaseapp.com",
  projectId: "manualidades-pwa",
  storageBucket: "manualidades-pwa.firebasestorage.app",
  messagingSenderId: "729918672131",
  appId: "1:729918672131:web:e29b58a7f89eaeed5ead36"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

