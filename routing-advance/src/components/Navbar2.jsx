import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    const navigate = useNavigate();
  return (
    <div>
      <button  onClick={()=>{
       navigate('/')
      }} className='bg-cyan-400 m-2 rounded p-1 text-xs active:scale-90'>Return to Home</button>
       <button  onClick={()=>{
       navigate(-1)
      }} className='bg-cyan-400 m-2 rounded p-1 text-xs active:scale-90'>Back</button>
       <button  onClick={()=>{
       navigate(+1)
      }} className='bg-cyan-400 m-2 rounded p-1 text-xs active:scale-90'>Naxt</button>
    </div>
  )
}

export default Navbar2

// 10:25 :23