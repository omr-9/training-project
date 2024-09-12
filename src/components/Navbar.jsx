import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Navbar = ({cart}) => {
  return (
    <nav className='bg-blue-500 text-white py-4 relative shadow-xl'>
      <div className='container py-2 flex justify-between items-center'>
        <div><a className='font-bold text-lg ' href="#"> Logo </a></div>
        <div className='flex gap-6'>
            <Link to="/">Home</Link>
            <Link className='flex items-center gap-1 group px-2  transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-800  rounded-full ' to="/CartPage">
                <span className='group-hover:block hidden transition-all duration-300' >Go To Cart</span>
               <div className=' relative'>
                   <FaShoppingCart  className='text-xl text-white drop-shadow-sm cursor-pointer' />
                   <span className=' absolute w-6 h-6 rounded-full text-white bg-black grid place-items-center top-[-15px] -right-5  '>{cart.length
                    }</span>
               </div>
            </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
