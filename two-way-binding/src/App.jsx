import React from 'react'
import { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState('')
  function formSubmit(e){
    e.preventDefault()
    console.log('from is sumitted by' ,title);
    setTitle('')
    
  }
  
  return (
    <form  onSubmit={(e)=>{
      formSubmit(e)
    }}>
     <input  type="text"
      placeholder='Enter the name' 
      value={title} 
      onChange={(e)=>{
       setTitle(e.target.value)
     }} />
     <button>Sbmit</button>
    </form>
    
   
  )
}

export default App
