import React,{useState,useEffect} from 'react'
import { db } from '../firebase'
import SignOut from './SignOut'
import {collection,onSnapshot,query, orderBy,} from "firebase/firestore"
import SendMessage from './SendMessage'

function Chat() {
    const [messages,setMessages] = useState([])
 
    // inicia useEffect2
    useEffect(() => {
        onSnapshot(collection(db, "messages"), (snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
      }, []);

      // cierra useEffect2 prueba





    return (
        <div>
            <SignOut />
                {messages.map(({id,text,photoURL})=>(
                    <div key={id}>
                        <img src={photoURL} alt="" />
                        <p>{text}</p>
                    </div>
                ))}
              <SendMessage />  
        </div>
    )
}

export default Chat
