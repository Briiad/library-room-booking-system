'use client'

import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='w-full h-24 p-6 fixed flex justify-around items-center bg-white shadow-md shadow-black z-10'>
      <div className='w-1/3'>
        <Link href='/'>
          <h1>
            <span className='font-bold'>Ruang</span>
            <span className='text-gray-400'>Kita</span>
          </h1>
        </Link>
      </div>

      <div className='w-1/3 flex justify-between'>
        <Link href='/content/ruangan'>
          <p className='text-sm font-bold'>Ruangan</p>
        </Link>

        <Link href='/content/cek-ruangan'>
          <p className='text-sm font-bold'>Cek Peminjaman</p>
        </Link>

        <Link href='/content/peraturan'>
          <p className='text-sm font-bold'>Peraturan</p>
        </Link>

        <Link href='/content/kontak'>
          <p className='text-sm font-bold'>Kontak</p>          
        </Link>
      </div>
    </nav>
  )
}

export default Navbar