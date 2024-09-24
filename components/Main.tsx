import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Main = () => {
  const imgStyle = {
    width: '50%'
  }
  return (
    <div className='flex flex-col justify-center align-middle text-center my-12'>
      <h1 className='text-3xl mx-auto font-poppins font-semibold'>Create <br /> awesome tweets <br /><span className='bg-[--main-color] text-white px-4 clip-poly '>with AI</span></h1>
      <p className='text-gray-500 mt-10 mb-5 w-5/6 font-medium mx-auto'>Give Ai a chance to create beautiful tweets to grow your audience</p>
      <Link href={'/signup'} className='bg-[--main-color] w-fit mx-auto text-white px-5 py-2 rounded-full my-5 font-semibold'>Signup</Link>
      <div className='w-5/6 mx-auto border-2 border-dashed border-[--main-color] mt-8 p-2 rounded flex flex-col gap-5'>
        <div className='w-full h-32 flex relative mx-auto items-center shadow-gray-200 shadow-lg'>
      <Image fill src={'/tweet1.png'} alt='tweet'/>
       </div>
       <div className='w-full h-32 flex relative mx-auto items-center shadow-gray-200 shadow-lg'>
      <Image fill src={'/tweet1.png'} alt='tweet'/>
       </div>
</div>

    </div>
  )
}

export default Main