import React from 'react'
import { SignIn } from '@clerk/nextjs'

const signInPage = () => {
  return (
    <div className='flex item-center justify-center h-screen w-full '>
        <SignIn/>
    </div>
  )
}

export default signInPage