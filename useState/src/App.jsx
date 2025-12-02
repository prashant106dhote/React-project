
import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  function increase(){
  setNum(num+1)
  }
   function decrease(){
  setNum(num-1)
  }
   function increase5num(){
  setNum(num+5)
  }
  return (
    <div className='box'>
    <div className='child' >
      <h1>Counter</h1>
       <h3>{num}</h3>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={increase5num}>increase 5</button>
    </div>
    </div>
  )
}

export default App
