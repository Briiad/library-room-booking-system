import React from 'react'

interface PostProps {
  user_name: string;
  user_nim: string;
  room_name: string;
  startSession: string;
  startDate: string;
  status: string;
}

export default function History({user_name, user_nim, room_name, startSession, startDate, status }: PostProps) {
  return (
     // Table of Room Data
    <>
      <td className="p-4 border">{user_name}</td>
      <td className="p-4 border">{user_nim}</td>
      <td className="p-4 border">{room_name}</td>
      <td className="p-4 border">{startSession}</td>
      <td className="p-4 border">{startDate}</td>
      <td className="p-4 border font-bold italic">{status}</td>
    </>
  )
}