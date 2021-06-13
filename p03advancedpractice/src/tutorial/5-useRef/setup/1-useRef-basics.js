import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const timeContainer = useRef(null);
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(timeContainer.current.value)
  }

  useEffect(()=>{
    console.log(refContainer.current);
    refContainer.current.focus();
  });

  return (
    <>
    <form className='form' onSubmit={handleSubmit}>
    <div>
    <input type='text' ref={refContainer}></input>
    <button type="submit">submit</button>
    </div>
    </form>
    {/* value for below div will NOT change on submit, since useRef will NOT trigger re-rendering */}
    <div ref={timeContainer}>{new Date().getTime().toString()}</div> 
    </>
  )
};

export default UseRefBasics;
