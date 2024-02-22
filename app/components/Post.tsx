'use client'

import prisma from "@/lib/prisma";
import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

interface PostProps {
    id: number;
    user_name: string;
    user_nim: string;
    user_mail: string;
    room_name: string;
    startSession: string;
    startDate: string;
    status: string;
}

export default function Post({ id, user_name, user_nim, user_mail, room_name, startSession, startDate, status }: PostProps) {

  const [newStatus, setNewStatus] = useState("");

  // Function Change Database Status
  const handleRequest = async (e: React.FormEvent) => {
    try{
      fetch ('/api/accept-request', {method: 'POST', headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        status: newStatus,
      })
    })
    }catch(error){
      console.log(error);
    } finally {
      // Send Email
      fetch ('/api/send-email', {method: 'POST', headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
          name: user_name,
          mail: user_mail,
          room: room_name,
          startSession: startSession,
          startDate: startDate,
          status: newStatus,
        })
      })
    }

    // Reset form
    setNewStatus("");
  }

  return (
      // Table of Room Data
      <table className="text-center border">
        <thead>
          <tr className=" border">
            <th className="p-2 border" >ID</th>
            <th className="p-2 border" >Name</th>
            <th className="p-2 border" >NIM</th>
            <th className="p-2 border" >Room</th>
            <th className="p-2 border" >Start Session</th>
            <th className="p-2 border" >Date</th>
            <th className="p-2 border" >Accept Request</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 border">{id}</td>
            <td className="p-4 border">{user_name}</td>
            <td className="p-4 border">{user_nim}</td>
            <td className="p-4 border">{room_name}</td>
            <td className="p-4 border">{startSession}</td>
            <td className="p-4 border">{startDate}</td>
            {/* 2 Buttons, Accept and Decline*/}
            <td className="p-4 border">
              {status === "pending" && (
                // Change to corresponding status based on button clicked
                <div className="flex">
                  {/* Form with 2 Buttons */}
                  <form onSubmit={handleRequest} className="flex">
                    <button
                      type="submit"
                      className="bg-green-500 mr-2 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => setNewStatus("accepted")}
                    >
                      Accept
                    </button>
                    <button
                      type="submit"
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => setNewStatus("declined")}
                    >
                      Decline
                    </button>
                  </form>
                </div>
              )}

              {status === "accepted" && (
                <form onSubmit={handleRequest} className="flex items-center">
                  <p>
                    Accepted
                  </p>
                  <button
                    type="submit"
                    className="bg-red-500 ml-2 hover:bg-red-700 text-white font-bold p-2 text-xl rounded"
                    onClick={() => setNewStatus("pending")}
                  >
                    <MdOutlineCancel />
                  </button>
                </form>
              )}

              {status === "declined" && (
                <form onSubmit={handleRequest} className="flex items-center">
                <p>
                  Declined
                </p>
                <button
                  type="submit"
                  className="bg-red-500 ml-2 hover:bg-red-700 text-white font-bold p-2 text-xl rounded"
                  onClick={() => setNewStatus("pending")}
                >
                  <MdOutlineCancel />
                </button>
              </form>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    );
}