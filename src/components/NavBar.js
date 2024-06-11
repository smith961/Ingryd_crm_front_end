import React, { useState } from 'react'
import '../styles/NavBar.css'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';

function NavBar() {
  const[click, setClick] = useState(false);
  
  const handleClick = () => setClick(!click);
  
  return (
    <nav className='nav'>
      <Link to='/' className='title'><h1>Ingryd CRM </h1></Link>
     
     <ul className= {click ? 'nav-menu active' : 'nav-menu'}>
     <li>
          <Link to= '/'> Home </Link>
          </li>
        <li>
          <Link to= '/about'> About </Link>
          </li>
        <li>
          <Link to= '/service'>Services</Link>
          </li>
        <li>
          <Link to= '/contact'>Contact </Link>  
          </li>
          <li>
          <Link to={click ? '/signup' : '/login'} onClick={handleClick}> {click ? "Register":"Login"} </Link>  
          </li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{color: "#fff"}}/>) :( <FaBars size={20} style={{color: "#fff"}}/>
        )}
      </div>

    </nav>
  )
}

export default NavBar