'use client'

import Link from "next/link"
import { Disclosure } from "@headlessui/react"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineSpaceDashboard, MdHistoryEdu } from "react-icons/md"
import { FaUser } from "react-icons/fa";
import { signOut } from "next-auth/react"

const Sidebar = () => {
  return (
    <Disclosure as="nav">
      <Disclosure.Button className="absolute right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group hover:bg-gray-900">
        <GiHamburgerMenu className="block md:hidden h-6 w-6" />
      </Disclosure.Button>

      <div className="p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:w-72 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
        <div className="flex flex-col justify-start items-center">
          <h1 className="pb-6 text-xl text-center font-bold border-b">Sistem Peminjaman Ruangan Perpustakaan</h1>

            <div className="my-6 mb-72 border-b border-gray-100 pb-4">
              <Link href='/admin' className="flex mb-2 justify-start items-center gap-4 px-12 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-white" />
                <h3 className="text-gray-600 group-hover:text-white">Home</h3>
              </Link>

              <Link href='/admin/post' className="flex mb-2 justify-start items-center gap-4 px-12 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <FaUser className="text-2xl text-gray-600 group-hover:text-white" />
                <h3 className="text-gray-600 group-hover:text-white">Request</h3>
              </Link>

              <Link href='/admin/history' className="flex mb-2 justify-start items-center gap-4 px-12 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdHistoryEdu  className="text-2xl text-gray-600 group-hover:text-white" />
                <h3 className="text-gray-600 group-hover:text-white">History</h3>
              </Link>
            </div>

            <div>
              <button onClick={() => signOut({redirect: true, callbackUrl: `${window.location.origin}`})} className="bg-red-500 text-white px-8 py-2 rounded-md">
                Logout
              </button>
            </div>
        </div>
      </div>  
    </Disclosure>
  )
}

export default Sidebar