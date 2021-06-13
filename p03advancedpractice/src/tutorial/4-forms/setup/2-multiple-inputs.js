import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [person, setPerson] = useState({firstName:'',email:'',age:''})
  const [people, setPeople] = useState([]);

  const handleChange=(e)=>{
    //find out which element trigger the event
    const name = e.target.name;
    const value = e.target.value;
    console.log(name,value)
    setPerson({...person,[name]:value})
  }

  const addToPeople=()=>{
    if (person.firstName && person.email && person.age) {
      const newPerson = {...person,id:new Date().getTime.toString()}
        setPeople([...people,newPerson])
        setPerson({firstName:'',email:'',age:''})
    }
   
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addToPeople();
  };
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='number'
              id='age'
              name='age'
              value={person.age}
              onChange={ handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <button type='submit'>add person</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
