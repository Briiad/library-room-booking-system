import React from 'react'
import Link from 'next/link'

const Unauthorized = () => {
  return (
    <section className='w-full h-screen flex justify-center items-center flex-col'>
      <h1 className='text-7xl font-bold text-center'>
        Unauthorized Access.
      </h1>
      <p>
        Be a good user and not try to access things you shouldn't.
      </p>
      <button className='p-4 bg-blue-600 mt-12 rounded-lg text-white font-semibold'>
        <Link href='/'>
          Go back to the home page
        </Link>
      </button>
    </section>
  )
}

export default Unauthorized