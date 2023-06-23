import Link from 'next/link'
import { FC } from 'react'
import UserAuthForm from './UserAuthForm'

const SignUp = () => {
  return (
    <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
        <div className='flex flex-col space-y-2 text-center'>
            {/* logo */}
            <h1 className='text-2xl font-semibold tracking-tight text-[#585858] dark:text-slate-200'>Welcome back!</h1>
            <p className='text-sm max-w-xs mx-auto text-[#585858] dark:text-slate-200'>
                By continuing you are setting up an EduMind account, and agree to our User Agreement and privacy policy.
            </p>

            {/* sign in form */}
            <UserAuthForm />

            <p className='px-8 text-center text-sm text-zinc-500 '>
              Already a member?{' '}
              <Link href='/sign-up' className='hover:text-zinc-600 text-sm underline underline-offset-4'>Sign Up</Link>
            </p>
        </div>
    </div>
  )
}

export default SignUp