import React from 'react'
import { auth,provider } from '../firebase.js'
import {Button} from '@material-ui/core'
import { signInWithPopup } from 'firebase/auth';
import logo from '../img/logo_mkd2.png'
import google from '../img/google.png'


function Signin() {
    function signInWithGoogle(){
            //const provider = new firebase.auth.GoogleAuthProvider()
                signInWithPopup(auth,provider)
        }
    return (
         
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', height: '30vh', alignItems: 'center' }}>
                <img src={logo} alt="MonkoChat"/>
            </div>          
         
            <div style={{ display: 'flex', justifyContent: 'center', height: '33vh', alignItems: 'center' }}>
            
                
                <Button style={{ padding: '30px', fontSize: '20px', borderRadius: '1', border:'groove',fontWeight: '600' }} onClick={signInWithGoogle}> 
                         
                            Ingresá con Google
                         
                </Button>
            </div> 
            <div style={{ display: 'flex', justifyContent: 'center', height: '10vh', alignItems: 'center' }}>
                <img src={google} alt="Google Pie"/>
            </div>
            
        </div>
    )
}

export default Signin
