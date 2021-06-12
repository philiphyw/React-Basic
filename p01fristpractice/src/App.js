import React,{ useState } from 'react';
import Tweet from './Tweet';
import './App.css';

function App() {
 const[isDarkTheme, setTheme] = useState(false); 
//  const[count,setCount] = useState(0);
// const increase = ()=>{
//   setCount(count+1);
// }
const[users,setUsers] = useState([
  {name:'John Snow',message:"This's not over",like:'20'},
  {name:'Peter Griffin',message:"I'm a family guy",like:'2'},
  {name:'Rick',message:"Where's Morty",like:'10'}
]);


const changeTheme = ()=> (isDarkTheme === true)?setTheme(false):setTheme(true);

  return(
    <div className='App'>
      
<div className={isDarkTheme?'dark-theme':'light-theme'}>
      
        {users.map(user => (<Tweet name={user.name} message={user.message} like={user.like} />))}
        
       
      </div>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
}

export default App;