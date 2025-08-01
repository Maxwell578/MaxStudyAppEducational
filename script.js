// === Motivational Quotes ===
const quotes = [
  "Believe in yourself and all that you are.",
  "Success doesn't come from what you do occasionally. It comes from what you do consistently.",
  "You are capable of amazing things.",
  "Don't watch the clock; do what it does. Keep going.",
  "Your future is created by what you do today, not tomorrow.",
  "Small steps every day lead to big results.",
  "Push yourself, because no one else is going to do it for you.",
  "Stay positive, work hard, make it happen.",
  "Opportunities don't happen. You create them.",
  "Keep learning, keep growing, keep moving forward."
];

// === DOM References ===
const quoteText = document.getElementById("quote-text");
const quoteButton = document.getElementById("new-quote-btn");
const shareButtons = {
  whatsapp: document.getElementById("whatsapp-share"),
  twitter: document.getElementById("twitter-share"),
  facebook: document.getElementById("facebook-share")
};

// === Generate Random Quote ===
function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

// === Update UI with Quote ===
function displayQuote(quote) {
  quoteText.style.opacity = 0;

  setTimeout(() => {
    quoteText.textContent = quote;
    quoteText.style.opacity = 1;
    updateShareLinks(quote);
  }, 300);
}

// === Update Share Links ===
function updateShareLinks(quote) {
  const encoded = encodeURIComponent(quote);
  shareButtons.whatsapp.href = `https://wa.me/?text=${encoded}`;
  shareButtons.twitter.href = `https://twitter.com/intent/tweet?text=${encoded}`;
  shareButtons.facebook.href = `https://www.facebook.com/sharer/sharer.php?u=&quote=${encoded}`;
}

// === Start App ===
function initQuoteFeature() {
  const quote = getRandomQuote();
  displayQuote(quote);

  if (quoteButton) {
    quoteButton.addEventListener("click", () => {
      const newQuote = getRandomQuote();
      displayQuote(newQuote);
    });
  }

  setInterval(() => {
    const autoQuote = getRandomQuote();
    displayQuote(autoQuote);
  }, 10000);
}

// === Run on Page Load ===
document.addEventListener("DOMContentLoaded", initQuoteFeature);
