import React from 'react'
import Sidebar from '../components/Sidebar'
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { redirect } from 'next/navigation'

export default async function Layout({children}: {children: React.ReactNode}) {
  const session = await getServerSession(authOptions);
  if (session?.user){
    return (
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-gray-200">
        <div className="w-full flex-none md:w-64">
          <Sidebar />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
            {children}
        </div>
      </div>
    )
  } else {
    // redirect to login page
    redirect('/api/auth/admin-login')
  }
}