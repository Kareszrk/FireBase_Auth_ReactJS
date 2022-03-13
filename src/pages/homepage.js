import React from 'react'
import { Button } from 'react-bootstrap';
import {firebase} from '../firebase';
import { getAuth } from "firebase/auth";

const auth = getAuth();

export default function Homepage() {

    const logout = () => {
        auth.signOut();
    }

    return (
        <Button onClick={logout}>Sign out</Button>
    )
}
