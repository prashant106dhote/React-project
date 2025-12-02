import React from 'react'

const App = () => {
  function formSubmit(e){
    e.preventDefault()
    console.log('from is sumitted');
    
  }
  
  return (
    <form  onSubmit={(e)=>{
      formSubmit(e)
    }}>
     <input  type="text" placeholder='Enter the name' />
     <button>Sbmit</button>
    </form>
    
   
  )
}

export default App
