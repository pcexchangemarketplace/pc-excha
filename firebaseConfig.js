// firebaseConfig.js
import { initializeApp }     from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth }           from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore }      from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getStorage }        from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js";

const firebaseConfig = {
  apiKey:            "AIzaSyChgHDZ5HD753OIuIyof6rBGMwMCGM1-vk",
  authDomain:        "pc-exchange.firebaseapp.com",
  projectId:         "pc-exchange",
  storageBucket:     "pc-exchange.firebasestorage.app",
  messagingSenderId: "104363247894",
  appId:             "1:104363247894:web:3a55b56dc53b9acda5e837"
};

const app     = initializeApp(firebaseConfig);
export const auth    = getAuth(app);
export const db      = getFirestore(app);
export const storage = getStorage(app);