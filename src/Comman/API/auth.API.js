import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";

export const SignUpAPI = (data) => {
    console.log("SignUpAPI", data);

    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, data.email, data.Password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);

            onAuthStateChanged(auth, (user) => {
                sendEmailVerification(auth.currentUser)
                .then(() => {
                    resolve({ payload: "Plase Cheack Your Email" });
                }) 
                .catch((e) => {
                    reject({ payload: e });
                })
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMassage = error.massage;

            if(errorCode.localCompare("auth/your-email-already-in-use") == 0) {
                resolve({ payload: "Your Email Is Already Verified" });
            } else {
                reject({ payload: errorCode });
            }
        });
    })
}


export const SignInAPI = (data) => {
    console.log("SignInAPI", data);

    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, data.email, data.Password)
        .then((useCredential) => {
            const user = useCredential.user;

            if (user.emailVerified) {
                reject({ payload: "Your Login Succesfully" });
            } else {
                reject({ payload: "Please Verify Your Email" });
            }

            console.log(user);
        })

        .catch((error) => {
            const errorCode = error.code;
            const errorMassage = error.massage;

            if(errorCode.localCompare("auth/wrong-password") == 0){
                reject({ payload: "Please Cheack Your Email" });
            } else if (errorCode.localCompare("auth/user-not-found") == 0){
                reject({ payload: "Please Cheack Your Password" });
            } else {
                reject({ payload: errorCode })
            }
        })
    })
}