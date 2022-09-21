import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";

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