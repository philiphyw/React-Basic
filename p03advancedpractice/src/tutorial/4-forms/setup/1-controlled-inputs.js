import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
const [firstName,setFirstName] = useState('');
const [email,setEmail] = useState('');
const [person,setPerson] = useState([]);


  const handleSubmit= (e)=>{
    e.preventDefault();
   if (firstName && email) {
    // let arr = person;
    // let id = arr.length + 1;
    // arr.push({id:id, firstName:{firstName},email:{email}}) 
    // console.log(arr);
    // setPerson(arr)
    const newPerson = {id:new Date().getTime().toString(),firstName,email}
    setPerson((person)=>{
      return [...person,newPerson]
    })
    console.log(person)
   }else{
     console.log('empty value is not acceptable')
   }
   
  }

  return (
  <>
  <article>
    <form className='form' onSubmit={handleSubmit}>
      <div className='form-control'>
        <label htmlFor='firstName'>Name:</label>
        <input type="text" id='firstName' name='firstName' value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
      </div>
      <div className='form-control'>
        <label htmlFor='email'>Email:</label>
        <input type="email" id='email' name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      </div>
      <button type='submit'>Add Person</button>    
    </form>

    <h1>People List</h1>
    {
    person.map((p)=>{
      const {id,firstName,email} = p
      return(
        <div key={id} className="item">
          <h2>{firstName}</h2>
          <p>{email}</p>
        </div>
      );
      })
      }
  </article>

  </>
    )
};

export default ControlledInputs;
