importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyD5FJOORIKvwj8WsgB5x2NvpsfDzJCEp8s",
  authDomain: "pizza-jp-fcm-demo.firebaseapp.com",
  projectId: "pizza-jp-fcm-demo",
  storageBucket: "pizza-jp-fcm-demo.appspot.com",
  messagingSenderId: "70711422698",
  appId: "1:70711422698:web:14a4c8c6b61cf059067193",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
