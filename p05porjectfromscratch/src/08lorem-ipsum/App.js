import React, { useState,useEffect } from 'react';
import data from './data';
function App() {
const [count, setCount]=useState(0);
const [paras,setParas]=useState([]);


const genParagraph = ()=>{
let num = document.querySelector("#prgNum").value;
console.log(typeof(num));
num=(num==="")?0:num;
num=(num<0)?0:num;
num=(num>=data.length)?data.length:num;
console.log(num);
setCount(num-1);
} 

useEffect(()=>{
setParas([]);
let num = document.querySelector("#prgNum").value;
console.log(num.length);
if (num.length>0 || count>0) {
let filterPara = data.filter((e,index)=>index<=count);
console.log(filterPara);
setParas(filterPara);
}
},[count])

  return (
  <div className="contianer">
    <h2 className='title'>Getting bored of the regular lorem ipsum?</h2>
    <div className="btn-group">
      <label htmlFor="">How many paragraphes?</label>
      <input type="number" name="" id="prgNum"/>
      <button className="btn btn-primary" onClick={()=>genParagraph()}>Generate</button>
    </div>


    <div className="content">
    {paras.map((paragraph,index)=>(
      <p key={index}>
        {paragraph}
      </p>
    ))}
    </div>
  </div>
    )
}

export default App;
