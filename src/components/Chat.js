import React,{useState,useEffect,useRef} from 'react'
import { db,auth } from '../firebase'
import SignOut from './SignOut'
import {collection,onSnapshot,limit, orderBy,query} from "firebase/firestore"
import SendMessage from './SendMessage'

function Chat() {
    const scroll=useRef()
    const [messages,setMessages] = useState([])
 
    // inicia useEffect2
    useEffect(() => {
        onSnapshot(query(collection(db, "messages"), orderBy("createdAt"),limit(30)), (snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
      }, []);

      // cierra useEffect2 prueba





    return (
        <div>
            <SignOut />
            <div className="msgs">
            {messages.map(({id,text,photoURL,uid})=>(
                    
                    <div>
                        <div key={id} className={`msg ${uid==auth.currentUser.uid ? 'sent':'received' }`}>
                        <img src={photoURL} alt="" />
                        <p>{text}</p>
                        </div>
                    </div>
                   
                ))}
            </div>
                
              <SendMessage />  
              <div ref={scroll}></div>
        </div>
    )
}

export default Chat
