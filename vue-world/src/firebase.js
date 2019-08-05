import Firebase from 'firebase'

// firebase init goes here
const config = {
  apiKey: "AIzaSyDeTMW8OEatIfvUd2t9cLuNhqZd0XOof0o",
  authDomain: "proj-0-8c535.firebaseapp.com",
  databaseURL: "https://proj-0-8c535.firebaseio.com",
  projectId: "proj-0-8c535",
  storageBucket: "proj-0-8c535.appspot.com",
  messagingSenderId: "723491458215",
  appId: "1:723491458215:web:1d08848d53c81a57"
}
export const firebaseApp = Firebase.initializeApp(config)
export const db = firebaseApp.database()
