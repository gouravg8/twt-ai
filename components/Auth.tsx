import Link from 'next/link'
import React from 'react'

type AuthTypes = {
 authText: string;
 alterAuth: string;
 alterAuthLink: string;
}

const Auth = ({authText, alterAuth, alterAuthLink}:AuthTypes) => {
  return (
    <div className='flex flex-col justify-center align-middle mx-auto text-center py-32'>
    <div className='bg-white shadow-lg w-5/6 py-8 mx-auto rounded-xl'>
        <div className='text-sm w-4/5 flex align-middle justify-center items-center gap-4 mx-auto border border-gray-300 p-3 rounded my-4'>
            <img src="https://www.shareicon.net/data/128x128/2016/07/10/119930_google_512x512.png" alt="" className='size-8' />
            <span>{authText} with Google</span></div>
        {/* or */}
        {/* <form className='my-5 w-4/5 mx-auto'>
             <input className='w-full my-2 py-2 px-3 border text-sm' type="email" name="email" id="email" placeholder='Email'/>
            <input className='w-full my-2 py-2 px-3 border text-sm' type="password" name="password" id="password" placeholder='Password'/>
            <button type="submit" className='w-full bg-[--main-color] text-white px-3 py-2 rounded my-2 text-sm'>{authText} with Email</button>
        </form> */}
        <p className='text-sm'>{alterAuthLink === 'login' ? 'Already have account?' : "Don't have account"} <Link href={alterAuthLink} className='text-[--main-color] font-semibold'>{alterAuth}</Link></p>
    </div>

    </div>
  )
}

export default Auth 