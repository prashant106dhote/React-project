import React, { useState } from 'react'

const App = () => {
    const [num, setNum] = useState({user:'prashant',age:20})
    const change=()=>{
       setNum(prev=> ({...prev,age:22}))
    }
  return (
    <div>
        <h2>{num.user},{num.age}</h2>
        <button onClick={change}>Click</button>
    </div>
  )
}

export default App

