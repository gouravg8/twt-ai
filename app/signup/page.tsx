import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col justify-center align-middle mx-auto text-center bg-gray-200 h-screen'>
    <div className='bg-white w-5/6 py-8 mx-auto rounded-xl'>
        <div className='text-sm w-4/5 flex align-middle justify-center items-center gap-4 mx-auto border border-gray-300 p-3 rounded-xl my-4'>
            <img src="https://www.shareicon.net/data/128x128/2016/07/10/119930_google_512x512.png" alt="" className='size-8' />
            <span>Sign up with Google</span></div>
        or
        <form className='my-5 w-4/5 mx-auto'>
            <p className=''>Email</p>
            <input className='w-full my-2 py-2 px-3 border' type="email" name="email" id="email" placeholder='enter your email'/>
            <button type="submit" className='w-full bg-[--main-color] text-white px-3 py-2 rounded my-2'>Sign up with Email</button>
        </form>
    </div>

    </div>
  )
}

export default page