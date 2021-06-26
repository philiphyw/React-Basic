import React,{useState} from 'react';


const Counter = () => {
const [count,setCount]=useState(0);    
    return (
        <div className="container">
            <label htmlFor="">{count}</label>
            <div className="btn-group">
                <button className="btn-secondary" onClick={()=>setCount(count-1)}>-</button>
                <button className="btn-primary"  onClick={()=>setCount(count+1)}>+</button>
            </div>
        </div>
    )
}

export default Counter
