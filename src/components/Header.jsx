import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div className='max-w-full h-20 bg-[#f5f7fa]'>
      <Image src={'/image/logo.png'} alt='logo' className='relative top-2.5 left-16 w-15 h-15' width={100} height={100}/>
    </div>
  )
}
