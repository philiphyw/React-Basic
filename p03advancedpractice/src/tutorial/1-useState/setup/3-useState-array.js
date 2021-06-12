import React from 'react';
import {useState} from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id)=>{
    let newPeople = people.filter(p => p.id!==id)
    setPeople(newPeople);
  }


  

  return(
    <React.Fragment>
      {people.map(p=>{
        const {id, name} = p        
        return(
        <div key = {id} className="item">
          <p>{name}</p>
          <button onClick={()=> removeItem(id)}>Remove</button>
        </div>
        )
      })}
      <button className="btn" onClick={()=>{setPeople([])}}>Clear Data</button>

    </React.Fragment>
    );
    };
export default UseStateArray;
