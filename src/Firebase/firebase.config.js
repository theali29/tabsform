// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
//import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyCqgSiwOhgeaphrT6Zl70euwYCkrQwW1Os',
//   authDomain: 'tabsform.netlify.app',
//   projectId: 'tabsform-71b83',
//   storageBucket: 'tabsform-71b83.firebasestorage.app',
//   messagingSenderId: '615515986380',
//   appId: '1:615515986380:web:eb2316310b32a6e44ba569',
//   measurementId: 'G-M4L5CK67M3',
// }
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain:
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_FIREBASE_AUTH_DOMAIN_PROD
      : process.env.REACT_APP_FIREBASE_AUTH_DOMAIN_DEV, // Localhost for development
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
const auth = getAuth(app)
export { auth }
