'use client'

import { signOut } from 'next-auth/react'
import React from 'react'

const UserNav = () => {
  return (
    <button onClick={() => signOut()} className="bg-red-500 text-white px-8 py-2 rounded-md">
      Logout
    </button>
  )
}

export default UserNav