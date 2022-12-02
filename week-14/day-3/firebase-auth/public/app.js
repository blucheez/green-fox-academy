// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js' // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCaxZTQbf6Kuk5WbNo70swj8yMC-GlJBNY',
  authDomain: 'greenfox-dbe41.firebaseapp.com',
  projectId: 'greenfox-dbe41',
  storageBucket: 'greenfox-dbe41.appspot.com',
  messagingSenderId: '735299832370',
  appId: '1:735299832370:web:bf68652a66de66fdf60a2b',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth()

const regForm = document.querySelector('.register')
const loginForm = document.querySelector('.login')
const loggedIn = document.querySelector('.auth-logged-in')
const welcomeString = document.querySelector('.welcome')

regForm.onsubmit = (e) => {
  e.preventDefault()
  handleRegister()
  loggedIn.style.display = 'block'
}
loginForm.onsubmit = (e) => {
  e.preventDefault()
  handleLogin()
  loggedIn.style.display = 'block'
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    welcomeString.textContent = `Welcome to the test site, ${user.email}!`
    loginForm.style.display = 'none'
    // ...
  } else {
    // User is signed out
    welcomeString.textContent = 'Wrong email or password!'
    // ...
  }
})

const handleRegister = () => {
  const regEmail = document.getElementById('regEmail')
  const regPw = document.getElementById('regPw')

  createUserWithEmailAndPassword(auth, regEmail.value, regPw.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user
      // ...
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      // ..
    })
}
const handleLogin = () => {
  const loginEmail = document.getElementById('loginEmail')
  const loginPw = document.getElementById('loginPw')

  signInWithEmailAndPassword(auth, loginEmail.value, loginPw.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user
      // ...
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      // ..
    })
}

const handleLogout = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    })
}

document.querySelector('.no-acc-register').onclick = (e) => {
  e.preventDefault()
  loginForm.style.display = 'none'
  regForm.style.display = 'flex'
}
document.querySelector('.no-acc-login').onclick = (e) => {
  e.preventDefault()
  loginForm.style.display = 'flex'
  regForm.style.display = 'none'
}
document.querySelector('.logout').onclick = (e) => {
  e.preventDefault()
  handleLogout()
  loginForm.style.display = 'flex'
  regForm.style.display = 'none'
  loggedIn.style.display = 'none'
}
