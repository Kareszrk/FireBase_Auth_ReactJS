import React from 'react'
import { Button } from 'react-bootstrap';
import { firebase, authErrors } from '../../firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

export default function Login() {
    const googleAuth = () => {
        const auth = getAuth();
        return signInWithPopup(auth, provider).then(async(result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log({user});
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            alert(authErrors(errorCode));
            return errorCode;
        });
    }

  return (
        <Button onClick={googleAuth}>Google Authentication</Button>
  )
}
