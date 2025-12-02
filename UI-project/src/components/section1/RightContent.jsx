import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
    
    
  return (
    <div id="right" className='h-full rounded-4xl flex overflow-x-auto flex-nowrap gap-7 p-6 w-2/3 '>
        {props.users.map(function(elem,inx){
          return <RightCard key={inx} id={inx} img={elem.img} tage={elem.tage}/>
        })}

        
    </div>
  )
}

export default RightContent