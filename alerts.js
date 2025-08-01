import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const alertForm = document.getElementById("alertForm");
const message = document.getElementById("responseMessage");

alertForm.addEventListener("submit", e => {
  e.preventDefault();
  const email = document.getElementById("email").value;

  push(ref(db, "jobAlerts"), {
    email,
    subscribedAt: new Date().toISOString()
  });

  message.textContent = "✅ Subscribed successfully!";
  alertForm.reset();
});
