// ✅ main.js (Firebase Google Sign-In)
import { auth, provider } from './firebase-config.js';
import { signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

window.addEventListener('DOMContentLoaded', () => {
  const signInBtn = document.getElementById('google-signin-btn');
  const greeting = document.getElementById('user-greeting');

  if (signInBtn) {
    signInBtn.addEventListener('click', () => {
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          greeting.textContent = `👋 Welcome, ${user.displayName}`;
          signInBtn.style.display = 'none'; // Hide button after login
        })
        .catch((error) => {
          console.error('Login error:', error);
          alert('Login failed. Try again.');
        });
    });
  }
});
// ✅ main.js (Firebase Google Sign-In)
import { auth, provider } from './firebase-config.js';
import { signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

window.addEventListener('DOMContentLoaded', () => {
  const signInBtn = document.getElementById('google-signin-btn');
  const greeting = document.getElementById('user-greeting');

  if (signInBtn) {
    signInBtn.addEventListener('click', () => {
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          greeting.textContent = `👋 Welcome, ${user.displayName}`;
          signInBtn.style.display = 'none'; // Hide button after login
        })
        .catch((error) => {
          console.error('Login error:', error);
          alert('Login failed. Try again.');
        });
    });
  }
});
