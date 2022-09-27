import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { getFirestore } from '@firebase/firestore'
import { getStorage } from 'firebase/storage'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBS3BXI7oIamDZse2JlUTk8_D5nzaW6BkE",
    authDomain: "perrinn-424-thrill-capital.firebaseapp.com",
    projectId: "perrinn-424-thrill-capital",
    storageBucket: "perrinn-424-thrill-capital.appspot.com",
    messagingSenderId: "1047230127531",
    appId: "1:1047230127531:web:820f1e8086fef2527f86ee"
  })

  export const database = getFirestore(app)
  export const auth = app.auth()
  export const storage = getStorage(app)
  export default app

