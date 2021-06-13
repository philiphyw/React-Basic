import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const[isError,setIsError]=useState('')
  const firstValue = isError || 'hello world';
  const secondValue = isError && 'hello world';

  // const changeResult = ()=>{
  //   if (isError!==true) {
  //     setIsError(true)
  //   }else{
  //     setIsError(false)
  //   }
  // }

  const changeResult = ()=>{setIsError(!isError)}

  return (
    <>

{/*use short circuit eveluation */}
{/*}   
     {isError && <h1>Error Result</h1>}
    {!isError && <h1>No Error Result</h1>}
*/}

{/* use ternary operation */}

    {isError?(<h1>Error Result</h1>):(<h1>No Error Result</h1>)}
    <button className='btn' onClick={()=>changeResult()}>Change Result</button>
    </>
  )
};

export default ShortCircuit;
