import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
        apiKey: "AIzaSyBoTQiWPh_K3s-YBNY96lurhLVAaj4gRSw",
        authDomain: "fir-tsu.firebaseapp.com",
        projectId: "fir-tsu",
        storageBucket: "fir-tsu.appspot.com",
        messagingSenderId: "546594983316",
        appId: "1:546594983316:web:1d4bc7f5e0bf15c7e0d381"
})

export const auth = app.auth()
export default app