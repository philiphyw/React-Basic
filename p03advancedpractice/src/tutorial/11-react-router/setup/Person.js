import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const[name,setName]=useState('default name')
  const{id}=useParams();//useParams() get and preserve data in string in an object
 
  console.log(id);
  useEffect(()=>{
   const newPerson = data.find(p => p.id === parseInt(id));
   setName(newPerson.name)
 },[])
 
  return (
    <div>
      <h2>{name || 'No Name'}</h2>
      <Link to='/People' className='btn'>Back to List</Link>
    </div>
  );
};

export default Person;
