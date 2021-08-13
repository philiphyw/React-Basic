import React,{useState} from "react";
import CounterComp from "./components/Counter_comp";
import CounterFunc from "./components/Counter_func";

export const ThemeContext = React.createContext()

function App() {
const [theme,setTheme]=useState('orange')  
  return (
    <ThemeContext.Provider value={{ backgroundColor:theme }}>
      <CounterFunc />
      <br/>
      <CounterComp initialCount={999} />
      <button onClick={()=>{
        setTheme(prevState=>(prevState==="orange"?"blue":"orange"))
        }}>Swith Theme</button>
    </ThemeContext.Provider>
  );
}

export default App;
