import React, { useState,useEffect } from 'react';
import Tours from "./Tours"
//data from API

const url = 'https://course-api.com/react-tours-project';


function App() {


//useState to preserve data
const [tours,setTours] = useState([]);


//fetch data from API
const fetchData = async()=>{
  try {
    const response = await fetch(url);
    const newData = await response.json();
    setTours(newData);
  } catch (error) {
    console.log(error);
  }
}

//useEffect to call fetchData on initial page rendering
useEffect(() => {fetchData()}, [])

//remove tour by id
const removeTour = (id) =>{
  const newTours = tours.filter(t => t.id !== id);
  setTours(newTours);
}

  return (

    <div className="App">
    <Tours tours={tours} removeTour={removeTour}/>
    <button className="btn btn-danger" onClick={()=>setTours([])}>Remove All</button>
    </div>

  );
}

export default App;