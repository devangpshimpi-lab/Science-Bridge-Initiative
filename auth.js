// ========================================
// FIREBASE IMPORTS
// ========================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// ========================================
// FIREBASE CONFIG
// ========================================

const firebaseConfig = {
  apiKey: "AIzaSyAsuFldOnhizmumw3BjwvNgIhqytNYF010",
  authDomain: "science-bridge-initiative.firebaseapp.com",
  projectId: "science-bridge-initiative",
  storageBucket: "science-bridge-initiative.firebasestorage.app",
  messagingSenderId: "1068436017350",
  appId: "1:1068436017350:web:61921204b0e0c6efb787c7",
  measurementId: "G-6JDHKD3SCJ"
};

// ========================================
// INITIALIZE FIREBASE
// ========================================

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// ========================================
// SIGNUP
// ========================================

const signupForm = document.getElementById("signupForm");

if(signupForm){

  signupForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email =
    document.getElementById("signupEmail").value;

    const password =
    document.getElementById("signupPassword").value;

    try{

      const userCredential =
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Account created successfully 🚀");

      window.location.href = "dashboard.html";

    }

    catch(error){

      alert(error.message);

    }

  });

}

// ========================================
// LOGIN
// ========================================

const loginForm = document.getElementById("loginForm");

if(loginForm){

  loginForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email =
    document.getElementById("loginEmail").value;

    const password =
    document.getElementById("loginPassword").value;

    try{

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Login successful 🔥");

      window.location.href = "dashboard.html";

    }

    catch(error){

      alert(error.message);

    }

  });

}

// ========================================
// LOGOUT
// ========================================

window.logoutUser = async function(){

  await signOut(auth);

  window.location.href = "index.html";

}

// ========================================
// AUTH CHECK
// ========================================

onAuthStateChanged(auth, (user) => {

  if(user){

    console.log("Logged in:", user.email);

  }
  else{

    console.log("No user logged in");

  }

});