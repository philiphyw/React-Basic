import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'
const Navbar = () => {
  const{openSidebar,openSubmenu,cloaseSubmenu} = useGlobalContext();
  const displaySubmenu = (e)=>{
    console.log(e);
  }

  return <nav className="nav">
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="stripe" className='nav-logo' />
        <button className="btn toggle-btn" onClick={openSidebar}><FaBars/></button>
      </div>
      <ul className="nav-links">
        <li><button className="link-btn" onMouseOver={(e)=>{displaySubmenu(e.target.value)}}>products</button></li>
        <li><button className="link-btn">developers</button></li>
        <li><button className="link-btn">company</button></li>
      </ul>
      <button className="btn signin-btn">Sign In</button>
    </div>
  </nav>
}

export default Navbar
