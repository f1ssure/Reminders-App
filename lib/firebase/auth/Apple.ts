import { OAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../index";

const provider = new OAuthProvider("apple.com");

export async function signInWithApple() {
  return signInWithPopup(auth, provider);
}