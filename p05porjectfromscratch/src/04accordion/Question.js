import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { BsPlusCircleFill} from 'react-icons/bs';
import {AiFillMinusCircle} from 'react-icons/ai'
const Question = ({question}) => {
const [isShowInfo,setIsShowInfo]=useState(false);

const{id,title,info} = question;
  return (
    <div key={id}>
      <div className='title-panel'>
      <h6>{title}</h6>
      <button className="title-btn" onClick={()=>setIsShowInfo(!isShowInfo)}>{isShowInfo===false?<BsPlusCircleFill/>:<AiFillMinusCircle/>}</button>
      </div>
      <p>{isShowInfo && info}</p>
    </div>
  )
};

export default Question;
