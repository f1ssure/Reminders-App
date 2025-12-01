import { auth, db } from "../index";
import {
	createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

// TODOs:
// inform the caller of success/failure
// maybe use a useReducer hook to then inform the user accordingly on different errors (in the caller component)
export async function SignUp(email: string, password: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    console.log(user); // delete later

    try {
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || "",
        createdAt: new Date(),
      });
      console.log("User document created/overwritten successfully");
    } catch (err) {
      console.error("Failed to create user document: ", err);
    }
  } catch(err) {
    const errorCode = err.code;
    const errorMessage = err.message;
    console.error(errorCode, errorMessage);
  };
};

// TODO: tidy up the SignIn function like the SignUp above
export async function SignIn(email: string, password: string) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
};


