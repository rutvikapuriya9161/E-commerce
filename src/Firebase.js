import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBAVjtNlSWYLQ3Q1CntThGcuxno52cVar8",
    authDomain: "e-commerce-aa6b8.firebaseapp.com",
    projectId: "e-commerce-aa6b8",
    storageBucket: "e-commerce-aa6b8.appspot.com",
    messagingSenderId: "598144025504",
    appId: "1:598144025504:web:ccc6b7142906c26c619ac5",
    measurementId: "G-S42KYXZER7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);