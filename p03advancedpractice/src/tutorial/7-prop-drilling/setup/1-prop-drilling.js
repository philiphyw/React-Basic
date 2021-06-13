import React, { useState } from 'react';
import {data} from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people,setPeople]=useState(data);
  const removePerson =(id) =>{
    let newPeople = people.filter(p=>p.id!==id);
    setPeople(newPeople);
  }
  return <section>
    <h3>prop drilling</h3>
    <List people={people} removePerson={removePerson}/>
  </section>
};

const List=({people, removePerson})=>{
  return<>
  {people.map(p=>{
    return <SinglePerson key={p.id} {...people} removePerosn={removePerson}/>;
  })}
  </>
}


const SinglePerson = ({id,name,removePerson})=>{
  return(
    <div className='item' key={id}>
      <h4>{name}</h4>
      <button className='btn' onClick={()=> removePerson(id)}>Remove</button>
    </div>
  )
}



export default PropDrilling;
