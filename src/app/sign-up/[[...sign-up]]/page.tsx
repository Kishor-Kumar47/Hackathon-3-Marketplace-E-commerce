import Navbarr from '@/components/Navbar'
import { SignUp } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <main>
      <Navbarr bgColor='bg-white'/>
    <div className='flex flex-col items-center justify-center py-4 space-y-4'>
      <h1 className='text-2xl text-orange-500'>Sign Up page</h1>
      <SignUp/>
    </div>
    </main>
  )
}

export default page








