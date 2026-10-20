import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex py-4 px-8 bg-cyan-900   justify-between'>
      <h3 className='text-lg font-bold'>Marvallus</h3>
      <div className='flex  gap-8'>
        <Link className='text-lg font-medium' to='/'>Home</Link>
        <Link className='text-lg font-medium' to='/about'>About</Link>
        <Link className='text-lg font-medium' to='/courses'>Courses</Link>
        <Link className='text-lg font-medium' to='/contect'>Contect</Link>
      </div>
    </div>
  )
}

export default Navbar
