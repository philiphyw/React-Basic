import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = ()=>{
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(list);
  }else{
    return []
  }
}

function App() {
const [name, setName]=useState('');  
const [list, setList]=useState(getLocalStorage());
const [isEditing,setIsEditing]= useState(false);
const[editID,setEditID]=useState(null);
const[alert,setAlert]=useState({show:false,msg:'Hello',type:'danger'});
const handleSubmit = (e)=>{
  e.preventDefault();
  console.log(name);
  if (!name) {
    //display alert
    showAlert(true,'danger','pls enter value');
  }else if(name && isEditing){
    setList(list.map((item)=>{
      if (item.id===editID) {
        return {...item,title:name};
      }
      return item
    }))
    setName('');
    setEditID(null);
    setIsEditing(false);
    showAlert(true,'success','todo updated');
  }else{
    //default, add item to the list
    showAlert(true,'success','New todo added');
    const newItem ={id:new Date().getTime().toString(),title:name};
    //setList(list.push(name))
    setList([...list,newItem])
    setName('');
  }
}

// store list to the local stroage of browser. so list will be preserved in refresh(rereder)
useEffect(()=>{
  localStorage.setItem('list',JSON.stringify(list));
})

const showAlert=(show=false, type='',msg='')=>{
  setAlert({show,type,msg})// ===  setAlert({show:show,type:type,msg:msg})
}


const clearList=()=>{
  showAlert(true,'danger','emply list');
  setList([]);
}

const removeItem =  (id)=>{
  showAlert(true,'danger','item revmoed');
  setList(list.filter(i=>i.id!==id));
}

const editItem = (id)=>{
 
  const selectedItem = list.find(i=>i.id===id);
  selectedItem && setIsEditing(true);
  setEditID(id);
  setName(selectedItem.title);
}

  return (
  <section className="section-center">
    <form onSubmit={handleSubmit} className="grocery-form">
    {alert.show && <Alert {...alert}
     removeAlert={showAlert} 
     list={list}/>}
    <h3>Todo List</h3>
    <div className="form-control">
      <input type="text" 
      className="grocery" 
      placeholder="e.g. buy milk" 
      value={name} 
      onChange={(e)=>setName(e.target.value)}/>
      <button type="submit" className="submit-btn">{isEditing?"edit":"submit"}</button>
    </div>
    </form>
    <div className="grocery-container">
      <List items={list} removeItem={removeItem}  editItem = {editItem}/>
      <button className="clear-btn" onClick={()=>clearList()}>clear todos</button>
    </div>
  </section>
    )
}

export default App
