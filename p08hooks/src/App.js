import logo from './logo.svg';
import './App.css';
import { useState,useEffect,useRef } from 'react';



function App() {
  
const inputRef = useRef();
const renderCount = useRef(1); // useRef return an object, this statement declared renderCount.current =1;
const[winWidth,setWinWidth] = useState(window.innerWidth);
const[name,setName]=useState('');
const handleWindowWidth=()=>{
  setWinWidth(window.innerWidth);
}
useEffect(() => {
  window.addEventListener('resize',handleWindowWidth);
 
  return () => {
    window.removeEventListener('resize',handleWindowWidth);
    console.log("remove previous eventlisterner.")
  }
}, [])

useEffect(() => {
  renderCount.current =renderCount.current+1;
  return () => {
  //clean up function
  }
})


const focus = ()=>{
  inputRef.current.focus();
}
  return (
    <div className="App">
     <p>The width of current window is {winWidth}</p>
     <input ref={inputRef} type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
     <p>{`The page has been rendered ${renderCount.current} time${renderCount.current>1?"s":""}.`}</p>
      <button onClick={()=>focus()}>Focus Input</button>

    </div>
  );
}

export default App;
