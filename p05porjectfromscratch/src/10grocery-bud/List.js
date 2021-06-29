import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({items, removeItem,editItem}) => {
  return <div className="grocery-list">
  {items.map((item,index)=>(
    <div className="grocery-item" key={item.id}>
      <p className='title'>{item.title}</p>
      <div className="btn-container">
      <button className="btn edit-btn" onClick={()=>editItem(item.id)}><FaEdit></FaEdit></button>
      <button className="btn delete-btn" onClick={()=>removeItem(item.id)}><FaTrash></FaTrash></button>
      </div>
    </div>
  ))}
  </div>
}

export default List
