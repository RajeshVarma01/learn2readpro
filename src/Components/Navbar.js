import React, { useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa"
const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }
  const navigate = useNavigate()
  return (
    <header className='header-design'>
      <h3><img src='https://x.learn2read.co/static/media/logo.49b6abccd0619643ecba3ed3e782bf9c.svg' alt='no-data'></img></h3>
      <nav ref={navRef}>
        <NavLink style={({ isActive }) => ({
          color: isActive ? '#D341FB' : 'black'
        })} to='/'>Home</NavLink>
        <NavLink style={({ isActive }) => ({
          color: isActive ? '#D341FB' : 'black'
        })} to='/about'>About Us</NavLink>
        <NavLink style={({ isActive }) => ({
          color: isActive ? '#D341FB' : 'black'
        })} to='/courses'>Courses</NavLink>
        <NavLink style={({ isActive }) => ({
          color: isActive ? '#D341FB' : 'black'
        })} to='/teachers'>Teachers</NavLink>
        <a href='#'>Resources</a>
        <NavLink style={({ isActive }) => ({
          color: isActive ? '#D341FB' : 'black'
        })} to='/faq'>FAQ</NavLink>
        <NavLink style={({ isActive }) => ({
          color: isActive ? '#D341FB' : 'black'
        })} to='/contact'>Contact Us</NavLink>
        <NavLink to='/readmore'></NavLink>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}><FaTimes /></button>
      </nav>
      <div className='btns'>
        <NavLink to='/signuppage'><button className='signup'>Signup</button></NavLink>
        <NavLink to='/loginpage'><button className='login'>Login</button></NavLink>
      </div>
      <button className='nav-btn' onClick={showNavbar}><FaBars className='fa-times' /></button>
    </header>
  )
}

export default Navbar
