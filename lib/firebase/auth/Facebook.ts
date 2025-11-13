import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../index";

const provider = new FacebookAuthProvider();

export async function signInWithFacebook() {
  return signInWithPopup(auth, provider);
}