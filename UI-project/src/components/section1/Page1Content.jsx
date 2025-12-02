import React from 'react'
import LeftText from './LeftText'
import RightContent from './RightContent'


const Page1Content = (props) => {
  return (
    <div className=' py-10 flex items-center gap-10 px-18 h-[90vh] '>
        <LeftText/>
        <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content