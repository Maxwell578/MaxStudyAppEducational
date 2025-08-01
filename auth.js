// auth.js
import { auth, provider } from "./firebase-config.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const googleBtn = document.getElementById("googleBtn");
const status = document.getElementById("status");

loginBtn.addEventListener("click", async () => {
  try {
    await signInWithEmailAndPassword(auth, emailInput.value, passInput.value);
    status.textContent = "✅ Logged in successfully!";
    window.location.href = "index.html";
  } catch (err) {
    status.textContent = `❌ Error: ${err.message}`;
  }
});

signupBtn.addEventListener("click", async () => {
  try {
    await createUserWithEmailAndPassword(auth, emailInput.value, passInput.value);
    status.textContent = "✅ Account created!";
  } catch (err) {
    status.textContent = `❌ Error: ${err.message}`;
  }
});

googleBtn.addEventListener("click", async () => {
  try {
    await signInWithPopup(auth, provider);
    status.textContent = "✅ Google login successful!";
    window.location.href = "index.html";
  } catch (err) {
    status.textContent = `❌ Google login failed: ${err.message}`;
  }
});
