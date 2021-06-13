import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  useEffect(()=>{
    console.log("called by useEffect");
   if (value<=10) {
    document.title = `New Messages (${value})`;
   }else{
    document.title = `Too Many Messages to Count...`;
   }
  })


  const [color,setColor] = useState('inherit')
  const colors = ['inherit','red','orange','yellow','green','black','blue','purple']
  const changeColor = ()=>{
    let newColor = colors[Math.floor(Math.random()*(colors.length))]
    setColor(newColor);
  } 

// it's totally ok to includes multiple useEffect on the same React Component
useEffect(()=>{document.body.style.backgroundColor = color},[color])



console.log('hello')
const[value, setValue] = useState(0);


  return(
    <>
    <h1>{value}</h1>
    <button className="btn" onClick={()=>{setValue(value +1)}}>Add</button>
    <hr/>
    <h1>Current color is {color}</h1>
    <button className="btn" onClick={()=>{changeColor()}}>Change Color</button>
    </>

  )
  
};

export default UseEffectBasics;
