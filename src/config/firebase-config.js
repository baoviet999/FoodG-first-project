
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAJm4JknBFtKeElrgPH71Ym47873m1NqkQ",
    authDomain: "gfood-e284f.firebaseapp.com",
    projectId: "gfood-e284f",
    storageBucket: "gfood-e284f.appspot.com",
    messagingSenderId: "360049669426",
    appId: "1:360049669426:web:994e5c2ef5b28f9123d32b",
    measurementId: "G-YVMCFWLT2F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
 export default authentication