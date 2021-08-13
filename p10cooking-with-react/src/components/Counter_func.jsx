import React,{useState, useContext} from 'react'
import { ThemeContext } from '../App'

const CounterFunc = ()=>{
const [count,setCount]=useState(0)
const contextStyle = useContext(ThemeContext)
return(
    <>
    <button style={contextStyle} className="btn" onClick={()=>{setCount(count-1)}}>-</button>
    <span>{count}</span>
    <button style={contextStyle} className="btn" onClick={()=>{setCount(count+1)}}>+</button>
    </>
)
}

export default CounterFunc