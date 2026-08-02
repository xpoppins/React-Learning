import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1content = (props) => {
  return (
    <div className=' gap-10 flex items-center h-[90vh] pb-16 pt-6 px-18'>
      <Leftcontent />
      <Rightcontent users={props.users}/>
    </div>
  )
}

export default Page1content
