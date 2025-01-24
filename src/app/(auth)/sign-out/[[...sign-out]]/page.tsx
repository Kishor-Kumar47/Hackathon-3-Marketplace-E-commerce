import { SignUp } from '@clerk/nextjs'
import React from 'react'

const signUp = () => {
  return (
    <div className='flex item-center justify-center h-screen w-full '>
            <SignUp/>
        </div>
  )
}

export default signUp