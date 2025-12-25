import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {
  const [userData,SetUserData] = useState([])
  const [index, setIndex] = useState(1)
  const getData =  async()=>{
       const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=8`)
      
       SetUserData(response.data)
  }
  useEffect(function(){
    getData()
  },[index])
 let printuserData = <h1 className='text-gray-300 font-semibold text-xs absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 '>Loading...</h1>
  if(userData.length>0){
    printuserData  = userData.map(function(elem,inx){
      return <div key = {inx}>
       
        <Card elem={elem}/>
      </div>

       })
  }
  return (
    <div className='bg-black h-screen text-white overflow-auto'>
    
     <div className='  flex h-[86%] flex-wrap gap-3 p-2'>
     
      {printuserData}
      </div> 
      <div className=' flex justify-center items-center gap-4 mb-4 mt-2 '>
        <button onClick={()=>{
          if(index>1){
            setIndex(index-1)
            SetUserData([])
          }
        }} style={{opacity:index == 1?0.5:1}} className='bg-amber-500 px-3 py-1 rounded text-xs text-black font-semibold cursor-pointer'>
          Prev
          </button>
          <button className='text-xs'>Page {index}</button>
        <button onClick={()=>{
           setIndex(index+1)
            SetUserData([])
        }} className='bg-amber-500 px-3 py-1 rounded text-xs  text-black  font-semibold cursor-pointer'>
          Next
          </button>
      </div>
    </div>
    
  )
}

export default App
