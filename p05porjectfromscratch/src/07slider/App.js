import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const[people, setPeople]=useState(data);
  const[index, setIndex]=useState(0);
  const incrIndex = ()=>{
    if (index<(people.length-1)) {
      setIndex(index+1);
    }else{setIndex(0)}
  }
  const decrIndex = ()=>{
    if (index>0) {
      setIndex(index-1);
    }else{setIndex(people.length-1)}
  }

useEffect(()=>{
  let slider = setInterval(() => {
    incrIndex();
  }, 3000);
  //need below clean up function to aviod the setInterval functions overlapped if user click the buttons.
  return ()=>clearInterval(slider);
},[index])

return <section className="section">
    <div className="title">
      <h2>
        <span>/</span>reviews
      </h2>
    </div>


    <div className="section-center">
      {people.map((person,personIndex)=>{
        const{id,image,name,title,quote}=person;
        let position = personIndex===index?"activeSlide":"nextSlide";
        if (personIndex===index-1 || (personIndex===people.length-1 && index===0)) {
          position='lastSlide';
        }
        return <article className={position} key={id}>
          <img className="person-img" src={image} alt={name} />
          <h4>{name}</h4>
          <p className={title}>{title}</p>
          <p className="text">{quote}</p>
          <FaQuoteRight className='icon'/>
        </article>
      })}
      <button className="prev" onClick={()=>decrIndex()}><FiChevronLeft></FiChevronLeft></button>
      <button className="next" onClick={()=>incrIndex()}><FiChevronRight></FiChevronRight></button>
    </div>
  </section>;
}

export default App;
