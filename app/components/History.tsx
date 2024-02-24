import React from 'react'

interface PostProps {
  user_name: string;
  user_nim: string;
  room_name: string;
  startSession: string;
  startDate: string;

}

export default function History({user_name, user_nim, room_name, startSession, startDate }: PostProps) {
  return (
     // Table of Room Data
      <table className="text-center border">
        <thead>
          <tr className=" border">
            <th className="p-2 border" >Name</th>
            <th className="p-2 border" >NIM</th>
            <th className="p-2 border" >Room</th>
            <th className="p-2 border" >Start Session</th>
            <th className="p-2 border" >Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 border">{user_name}</td>
            <td className="p-4 border">{user_nim}</td>
            <td className="p-4 border">{room_name}</td>
            <td className="p-4 border">{startSession}</td>
            <td className="p-4 border">{startDate}</td>
          </tr>
        </tbody>
      </table>
  )
}