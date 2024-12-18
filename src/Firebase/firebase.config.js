// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCqgSiwOhgeaphrT6Zl70euwYCkrQwW1Os',
  authDomain: 'tabsform-71b83.firebaseapp.com',
  projectId: 'tabsform-71b83',
  storageBucket: 'tabsform-71b83.firebasestorage.app',
  messagingSenderId: '615515986380',
  appId: '1:615515986380:web:eb2316310b32a6e44ba569',
  measurementId: 'G-M4L5CK67M3',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth(app)
export { auth }
