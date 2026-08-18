// ════════════════════════════════════════════════════════════
// 🔥 FIREBASE CONFIG — NM Jewellers
// ────────────────────────────────────────────────────────────
// This is the ONLY file you need to edit to connect the site
// to your real Firebase project.
//
// HOW TO GET THESE VALUES:
//   1. Go to https://console.firebase.google.com
//   2. Create a project (or open your existing "nm-jewellers" project)
//   3. Project Settings (gear icon) → scroll to "Your apps"
//   4. Click the Web icon (</>) → register an app if you haven't
//   5. Copy the firebaseConfig object shown there and paste the
//      values below, replacing the YOUR_... placeholders.
//
// NOTE: It's normal and safe for these values to be visible in
// public client-side code — this is how every Firebase web app
// works. Firebase secures your data via Firestore Security Rules
// (see firestore.rules in this repo), NOT by hiding this config.
// ════════════════════════════════════════════════════════════

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
  getFirestore, collection, doc, getDoc, getDocs,
  setDoc, addDoc, updateDoc, deleteDoc, onSnapshot,
  serverTimestamp, query, orderBy, limit, where
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import {
  getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

const app  = initializeApp(firebaseConfig);
const db   = getFirestore(app);
const auth = getAuth(app);

export {
  db, auth,
  collection, doc, getDoc, getDocs, setDoc, addDoc, updateDoc, deleteDoc,
  onSnapshot, serverTimestamp, query, orderBy, limit, where,
  signInWithEmailAndPassword, signOut, onAuthStateChanged
};
