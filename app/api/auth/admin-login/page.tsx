'use client'

import React, { FormEvent } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const LoginAdmin = () => {
  const router = useRouter()

  async function handleSubmit(e: FormEvent){
    e.preventDefault()
    const form = new FormData(e.target as HTMLFormElement)
    const signInData = await signIn('credentials', {
      username: form.get('username'),
      password: form.get('password'),
      redirect: false
    })

    if(signInData?.error){
      console.error('Failed to login')
    } else {
      router.push('/admin')
    }
  }

  return (
    <section className="flex justify-center items-center h-screen">
      <form className="bg-blue-600 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <h1 className='text-center text-white font-bold text-3xl my-4'>Admin Login</h1>
        <div className="mb-4">
          <label htmlFor="username" className="block text-white text-sm font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-white text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-white hover:scale-110 transition duration-75 ease-linear text-blue-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </div>
      </form>
    </section>
  )
}

export default LoginAdmin