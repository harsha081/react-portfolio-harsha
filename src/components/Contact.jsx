import React from 'react'
import { CONTACT } from '../constants'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900  pb-20'>
        <h1 className='text-center text-4xl pb-4 text-violet-400'>
            Get In Touch
        </h1>
        <div className='text-center tracking-tight '>
            <p>
                Address: {CONTACT.address}
            </p>
            <p >
                {CONTACT.phoneNo}
            </p>
            <p >
                {CONTACT.email}
            </p>
        </div>
    </div>
  )
}

export default Contact