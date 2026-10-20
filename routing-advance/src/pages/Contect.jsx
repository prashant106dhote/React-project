import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contect = () => {
  return (
    <div>
      <div className='flex justify-center gap-10 py-4'>
        <Link className='text-xs font-semibold' to='/contect/man'>Men's</Link>
        <Link className='text-xs font-semibold' to='/contect/women'>Women's</Link>
        <Link className='text-xs font-semibold' to='/contect/kides'>Kides's</Link>
      </div>
      
      <Outlet/>
    </div>
    
  )
}

export default Contect
