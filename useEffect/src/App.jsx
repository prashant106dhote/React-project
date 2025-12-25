
import React, { useEffect, useState } from 'react'

const App = () => {
  const [a, setaA] = useState(0)
  const [b, setaB] = useState(0)
  useEffect(function(){
    console.log("useEffect is runninng")
  },[b])
  return (
    <div>
      <h1>A value {a}</h1>
      <h1>B value {b}</h1>
      <button onClick={()=>{
        setaA(a+1)
      }}>A</button>
      <button onClick={()=>{
        setaB(b-1)
      }}>B</button>
    </div>
  )
}

export default App
