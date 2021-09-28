import "./firebase";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential, //interface promise
} from "firebase/auth";

export default async function authGoogle(): Promise<UserCredential> {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider).then((result) => result);
}
/*
.then((result) => {
        console.log("Hola");
        // console.log(result);
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user.displayName);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
*/
