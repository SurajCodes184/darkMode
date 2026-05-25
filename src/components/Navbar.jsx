import React, { useContext } from 'react'
import { Link } from 'react-router-dom'


import { ThemeContext } from "../context/ThemeContext";
const Navbar = () => {

   const { darkMode, setDarkMode } =
    useContext(ThemeContext);
  return (
    <>
      <div className='container flex justify-between items-center'>
        <div>
            <img className='w-28 h-28' src="https://static.vecteezy.com/system/resources/thumbnails/047/656/219/small/abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg" alt="" />
        </div>
        <div>
            <ul className='flex gap-5 items-center'>
                <Link to='/'><li className='decoration-none'>Home</li></Link>
               <Link to='/counter'><li className='decoration-none cursor-pointer'>Counter</li></Link>
               <Link to='/todo'><li className='decoration-none cursor-pointer'>Todo</li></Link>
            </ul>
        </div>
        <div>
           <Link to='/login'> <button>Login</button></Link>
           
        </div>
        <button
      onClick={() => setDarkMode(!darkMode)}
    >
      Toggle Theme
    </button>
      </div>
    </>
  )
}

export default Navbar
