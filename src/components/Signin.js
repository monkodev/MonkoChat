import React from 'react'
import { auth,provider } from '../firebase.js'
import {Button} from '@material-ui/core'
import { signInWithPopup } from 'firebase/auth';


function Signin() {
    function signInWithGoogle(){
            //const provider = new firebase.auth.GoogleAuthProvider()
                signInWithPopup(auth,provider)
        }
    return (
        <div>
            <Button onClick={signInWithGoogle} 
                     >Ingresá con Google
            </Button>
        </div>
    )
}

export default Signin
