import React from 'react'
import { avatar, quotationMark } from '../assets'

const FeedbackCard = () => {
  return (
    <div className='bg-white p-8 rounded-3xl shadow-xl my-8 mx-2'>
      <div className='flex justify-between'>
      <div className='flex gap-4'>
        <img src={avatar} />
        <div>
            <h1>
                Jenny Wilson
            </h1>
            <p>UI-UX Dsigner</p>
        </div>
              </div>
              <img className='h-8' src={quotationMark} />

    </div>
    <div className='py-8'>
<h3 className='text-lg'>Training feedback forms provide you with valuable insight into how you can deliver more effective, successful, and engaging sessions.</h3>

    </div>
      </div>
  )
}

export default FeedbackCard
