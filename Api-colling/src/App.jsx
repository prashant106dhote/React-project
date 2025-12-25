import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const App = () => {
  const [data, setData] = useState([])
   const getData =async ()=>{
     const respons = await axios.get( 'https://jsonplaceholder.typicode.com/todos')
       setData(respons.data)
       
   }
  
  return (
    <div>
    <button onClick={getData}>Get Data</button>
    {data.map((elem,inx)=>{
      return <h3>hello {inx}</h3>
    })}
    </div>
  )
}

export default App
//  7: 54:47