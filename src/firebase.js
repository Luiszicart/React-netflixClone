import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCXWh2dTvbQmZsW9uAu2Pf1Pt6qJhJZxg4",
  authDomain: "netflix-clone-eab03.firebaseapp.com",
  projectId: "netflix-clone-eab03",
  storageBucket: "netflix-clone-eab03.appspot.com",
  messagingSenderId: "992021299057",
  appId: "1:992021299057:web:38836dba5770b5c73740d0"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db
