import React from 'react'

const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url}>
          <div className='h-30 w-44  bg-white rounded overflow-auto'>
        <img className='h-full w-full object-cover ' src={props.elem.download_url} alt="" />
         </div>
          <h2 className='font-bold text-sm'>{props.elem.author}</h2>
         
        </a>
    </div>
  )
}

export default Card
