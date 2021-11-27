import Button from '@material-ui/core/Button/Button'
import React from 'react'
import { auth } from '../firebase'

function SignOut() {
    return (
        <div>
            <Button onClick={()=> auth.signOut()}>Salir</Button>
        </div>
    )
}

export default SignOut
