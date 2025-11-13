import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../index";

const provider = new GoogleAuthProvider();

export async function signInWithGoogle() {
  return signInWithPopup(auth, provider);
}