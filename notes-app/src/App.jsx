import React, { useState } from 'react'
import {  X } from  "lucide-react";




const App = () => {
  const submitHandler = (e)=>{
   e.preventDefault()
    const copyTask = [...task]
    copyTask.push({title,detail})
    console.log(copyTask);
    setTask(copyTask)
    
    setTitle('')
    setDetail('')
    
  }
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [task, setTask] = useState([])

  const deleteNotes =(inx)=>{

    const copyTask = [...task]
   
    copyTask.splice(inx,1)
      setTask(copyTask)
    
    
    
  }
  return (
    <div className='lg:flex h-screen bg-black text-white overflow-hidden '>
      
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className=' flex lg:w-1/2 flex-col  items-start gap-4 p-10'>
        <h1 className='text-4xl font-bold'>Add notes</h1>

     {/* hading  */}

      <input type="text"
      placeholder='Enter Notes Detail'
       className='px-5 py-2 rounded border-2 w-full outline-none' 
       value={title}
      onChange={(e)=>{
        setTitle(e.target.value)
      }}
       />

       {/* detailed */}

      <textarea type="text"
       placeholder='Notes Detail'
        className='px-5 h-32 py-2 rounded border-2  w-full outline-none'
        value={detail}
        onChange={(e)=>{
        setDetail(e.target.value)
      }}
        />
      <button className='bg-white active:bg-gray-300 text-black py-2 px-5 rounded outline-none w-full'>Add</button>
     
      
    </form>
    <div className='bg-gray-900 lg:w-1/2 h-full  p-10'>
      <h1 className='text-3xl font-bold mb-2'>Resent Notes</h1>
      <div className=' flex flex-wrap gap-5  h-full overflow-auto'>
         {task.map(function(elem ,inx){
         
            return <div key ={inx} className='flex justify-between flex-col  items-start  text-black font-bold px-10 py-10  h-62 w-50 bg-white rounded-2xl pb-4 pt-9 '>
             
              <h1 className='leading-tight text-xl font-bold pb-2'>{elem.title}</h1>
              <div id='scroll'  className='overflow-scroll'>
                
              <p className=' leading-tight font-medium text-gray-500'>{elem.detail}</p>
              </div>
             <button onClick={()=>{
               deleteNotes(inx)
             }} className='w-full py-1 text-xs font-bold rounded bg-red-500 text-white active:scale-95 mt-4'>Delete</button>
               </div>
            
         })}
      </div>
    </div>
    </div>
  )
}

export default App

// 7:6:0
