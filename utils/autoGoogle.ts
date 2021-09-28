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
