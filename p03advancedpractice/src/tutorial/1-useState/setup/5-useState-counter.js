import React, { useState } from 'react';

const UseStateCounter = () => {
  const[value,setValue]=useState(0);

  const increaseValue = () =>{
    let newValue =value+1;
    setValue(newValue);
  }
  const decreaseValue = () =>{
    let newValue =value-1;
    setValue(newValue);
  }

//when use sth like setTimeout/ setInterval, there will be a difference btw pass a value or a function to the set function in useState

//example 1 pass a value directly
const passValue=()=>{
  setTimeout(()=>{
    return setValue(value +1);
  },2000)
}

//example 2 pass a value directly
const passFunc=()=>{
  setTimeout(()=>{
     setValue((preState)=>{
      return preState+1;
    });
  },2000)
}

  return <>
    <section style={{ margin:'4rem 0' }}>
      <h2>Regular Counter</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={()=>increaseValue()}>Increase</button>
      <button className="btn" onClick={()=>decreaseValue()}>Decrease</button>

      {/* click below 2 button multiple time, and see how the useState change after 2 seconds, detail refer to John Smilga 's 10 hour react video 04:38:00 */}
      <button className="btn" onClick={()=>passValue()}>Add by pass a value directly</button>
      <button className="btn" onClick={()=>passFunc()}>Add by pass a function</button>
      <button className="btn" onClick={()=>{setValue(0)}}>Reset</button>

    </section>
  
  
  </>
};

export default UseStateCounter;
