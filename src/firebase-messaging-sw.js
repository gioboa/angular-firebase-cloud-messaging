importScripts(
  "https://www.gstatic.com/firebasejs/11.4.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/11.4.0/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "----",
  authDomain: "----",
  projectId: "----",
  storageBucket: "----",
  messagingSenderId: "----",
  appId: "----",
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();