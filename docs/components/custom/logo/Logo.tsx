import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href='/' className='text-3xl text-foreground mx-5' style={{fontFamily:"Urbanist"}}>kopiui</Link>
  )
}

export default Logo