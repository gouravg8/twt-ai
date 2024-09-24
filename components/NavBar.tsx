import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-between align-middle items-center px-6 py-2 bg-gray-100'>
    <div className='flex justify-center align-middle items-center'>
      <img src="/twtlogo.svg" alt="" className='size-12' />
      <Link href={'/'} className='text-base font-bold '>TwtAi</Link>
    </div>
    🍔
    </div>
  )
}

export default NavBar