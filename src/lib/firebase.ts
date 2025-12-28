// Firebase configuration and initialization
import { Analytics, getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// ✅ Import Firestore (Cloud Firestore SDK v9 Modular)
import { Firestore, getFirestore } from "firebase/firestore";

// 🔑 Your web app's Firebase configuration
// ⚠️ UWAGA: Upewnij się, że masz ustawione zmienne środowiskowe w pliku .env.local:
//    VITE_FIREBASE_API_KEY=twój-api-key
//    VITE_FIREBASE_AUTH_DOMAIN=twój-auth-domain
//    VITE_FIREBASE_PROJECT_ID=twój-project-id
//    VITE_FIREBASE_STORAGE_BUCKET=twój-storage-bucket
//    VITE_FIREBASE_MESSAGING_SENDER_ID=twój-messaging-sender-id
//    VITE_FIREBASE_APP_ID=twój-app-id
//    VITE_FIREBASE_MEASUREMENT_ID=twój-measurement-id
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Analytics and export
let analytics: Analytics | null = null;

// Only initialize analytics in browser environment
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

// ✅ Initialize Firestore (Cloud Firestore)
// Firestore będzie używany do zapisywania wiadomości kontaktowych
const db: Firestore = getFirestore(app);

// Export Firebase instances
export { analytics, app, db };
