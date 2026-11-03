// ===== חיבור ל־Firebase – למלא פעם אחת =====
// 1) Firebase console ← ⚙️ Project settings ← Your apps ← (Web app) ← SDK setup and configuration ← Config
//    להעתיק לכאן את הערכים:
self.FIREBASE_CONFIG = {
  apiKey: "AIzaSyDKp6Y368THotK0xyjCY_hnn-HQVvMHPvQ",
  authDomain: "little-wins-945fe.firebaseapp.com",
  projectId: "little-wins-945fe",
  storageBucket: "little-wins-945fe.firebasestorage.app",
  messagingSenderId: "655273676975",
  appId: "1:655273676975:web:baaaf34519c4afb93d845a"
};
// 2) ⚙️ Project settings ← Cloud Messaging ← Web Push certificates ← Generate key pair ← להעתיק את ה־Key pair:
self.VAPID_KEY = "BGlMO0jKq7hjvL82DJtgIPrqGXvQKe_9XkmB1WdENs87YWOv7xNuwLVxnw54WWmmiofJWvfGCUncs6sRzt1Bfwg";
