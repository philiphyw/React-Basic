import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState([
    {id:1, name: 'Peter',age:45,message:"For Pete'sake"},
    {id:2,name: 'Brian',age:11,message:"I am an author"},
    {id:3,name: 'Stewie',age:1,message:"What the douce?"}
  ])

  return(
    <React.Fragment>
    {person.map(p=>{
      const{id,name,age,message} = p
      const changeMsg=(id)=>{
        const b=[];
        person.forEach(a=>{
          if (a.id ===id) {
            a.message="message is changed";
          }
          b.push(a);
        })
        setPerson(b);
      }
      return(
        <div key = {id}>
          <p>{name} is {age} y/o</p>
         <p>{name} likes to say: {message}</p>
         <button onClick={()=>changeMsg(id)}>Change Message</button>
        </div>
       
      )
    })}

    </React.Fragment>
  )
};

export default UseStateObject;
