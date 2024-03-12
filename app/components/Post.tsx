'use client'

import { useState } from "react";

interface PostProps {
    id: string;
    user_name: string;
    user_nim: string;
    user_mail: string;
    room_name: string;
    startSession: string;
    startDate: Date;
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
          name: user_name,
          nim: user_nim,
          mail: user_mail,
          roomName: room_name,
          startSession: startSession,
          startDate: startDate,
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
    <>
      <td className="p-4 border">{user_name}</td>
      <td className="p-4 border">{user_nim}</td>
      <td className="p-4 border">{room_name}</td>
      <td className="p-4 border">{startSession}</td>
      <td className="p-4 border">{startDate.toISOString()}</td>
      {/* 2 Buttons, Accept and Decline*/}
      <td className="p-4 border">
        {status === "pending" && (
          // Change to corresponding status based on button clicked
          <div className="flex justify-center">
            {/* Form with 2 Buttons */}
            <form onSubmit={handleRequest} className="flex justify-center">
              <button
                type="submit"
                className="bg-green-500 mr-2 hover:bg-green-700 text-white w-full py-2 px-4 font-bold rounded"
                onClick={() => setNewStatus("accepted")}
              >
                Accept
              </button>
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-700 text-white w-full py-2 px-4 font-bold rounded"
                onClick={() => setNewStatus("declined")}
              >
                Decline
              </button>
            </form>
          </div>
        )}

        {status === "accepted" && (
          <p>
            Accepted
          </p>
        )}

        {status === "declined" && (
          <p>
            Declined
          </p>
        )}
      </td>
    </>
  );
}