import React from 'react'

const RightCardContent = (props) => {
  return (
    
      <div className='absolute top-0 left-0 h-full w-full p-8  flex flex-col justify-between '>
            <h2 className='bg-white rounded-full h-8 w-8 flex justify-center items-center font-bold text-2xl'>{props.id+1}</h2>
            <div>
                <p className='mb-4 text-white leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nisi laudantium quae veniam aut fugiat Aperiam nisi sit?</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-600 text-white font-semibold px-8 py-1 rounded-full'>{props.tage}</button>
                    <button className='bg-blue-600 text-white font-semibold px-4 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
            </div>
   
  )
}

export default RightCardContent

// 4:10;0
