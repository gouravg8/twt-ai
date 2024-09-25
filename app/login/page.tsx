import Auth from '@/components/Auth'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
<Auth authText='Log in' alterAuth='Sign up' alterAuthLink='signup'/>
  )
}

export default page