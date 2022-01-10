import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAVsM9bLGdpdTCZJDG9Bn9CpncQ9O6iuCc',
  authDomain: 'mymoney-748c3.firebaseapp.com',
  projectId: 'mymoney-748c3',
  storageBucket: 'mymoney-748c3.appspot.com',
  messagingSenderId: '102231184775',
  appId: '1:102231184775:web:86a889aeb56c2e4370af22',
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }