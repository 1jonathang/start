import Link from 'next/link'
import { FC } from 'react'
import UserAuthForm from './UserAuthForm'

const SignIn = () => {
  return (
    <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
        <div className='flex flex-col space-y-2 text-center'>
            {/* logo */}
            <h1 className='text-2xl font-semibold tracking-tight text-[#585858] dark:text-slate-200'>Login / Sign Up</h1>
            <p className='text-sm max-w-xs mx-auto text-[#585858] dark:text-slate-200'>
                By continuing you are setting up an EduMind account, and agree to our User Agreement and privacy policy.
            </p>

            <UserAuthForm />

            
        </div>
    </div>
  )
}

export default SignIn