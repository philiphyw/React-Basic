import React,{useState, useRef} from 'react';
import './App.css';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

// if (!firebase.apps.length) {
//   firebase.initializeApp({});
// }else {
//   firebase.app(); // if already initialized, use that one
// }


firebase.initializeApp({
  apiKey: "AIzaSyB8DOXYo1ja1arM4amvmt4v8rQEb-_BW0w",
  authDomain: "p06chatapp.firebaseapp.com",
  projectId: "p06chatapp",
  storageBucket: "p06chatapp.appspot.com",
  messagingSenderId: "145645655428",
  appId: "1:145645655428:web:cd334afa646ab9e81d79d1",
  measurementId: "G-10X7R4L0H6"
})

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {
//get login user from auth
const [user] = useAuthState(auth);


  return (
    <div className="App">
      <header className="App-header">
      <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>
    <section>
      {user?<ChatRoom />:<SignIn />}
    </section>

    </div>
  );
}


//create pop-up window for google singin


function SignIn(){
  function singInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
   }
  return<>
  <button onClick={()=>singInWithGoogle()}>Sign in with Google</button>
  </>
}


function SignOut() {
  return auth.currentUser &&(
    <button onClick={()=>auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom(){

  const uiBottom = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(30);
  //use useCollectionData hook to listen to data
  const[messages] = useCollectionData(query,{idField:'id'});

  const[formValue,setFormValue] = useState('');


  //use async method to send msg to db
  const sendMessage = async(e)=>{
    //prevent the default submit behavior-reload page
    e.preventDefault();

     //grap the user id from current login user
     const{uid, photoURL} = auth.currentUser;


    //add a document to the firestore db
    await messagesRef.add({
      text:formValue,
      createdAt:firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    });
    //reset form value after it sent
    setFormValue('');

    //every time ater sent out a msg, scroll to the useRef ioBottom
   uiBottom.current.scrollIntoView({behavior:'smooth'});

  }

  return<>
    <div>
      {messages && messages.map(m=>{
        return <ChatMessage key={m.id} message={m}/>
      })}
      {/* add a span and ref to useRef to make the UI auto scroll down to the latest input msg */}
      <span ref={uiBottom}></span>
    </div>

    {/* UI for sending msg */}
    <form onSubmit={sendMessage}>
      {/* bind the input with the useState fomrValue */}
      <input value={formValue} onChange={(e)=>setFormValue(e.target.value)}/>
      <button type="submit" disabled={!formValue}>&#128172;</button>
    </form>
  </>
}




function ChatMessage(props) {
  const {text,photoURL, uid} = props.message;
  //differentiate send/receive msg by comparing user id
  const messageClass = uid === auth.currentUser.uid ? 'sent':'received';

  return<>
  {/* apply different style on sent/recived msg */}
  <div className={`message ${messageClass}`}>
    <img src={photoURL} alt={uid}/>
    <p>{text}</p>
    </div>
  </>
}


export default App;


