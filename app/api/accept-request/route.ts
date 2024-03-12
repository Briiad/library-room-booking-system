import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request){
  const res = await request.json();
  const {id, name, nim, mail, roomName, startSession, startDate, status} = res;

  const result = await prisma.room.update({
    where: {
      id: id
    },
    data: {
      status: status
    }  
  })

  // if status accepted, add data to history table
  if(status === "accepted" || status === "declined"){
    const history = await prisma.history.create({
      data: {
        user_name: name,
        user_nim: nim,
        user_mail: mail,
        room_name: roomName,
        startSession: startSession,
        startDate: startDate,
        status: status
      }
    })

    // Then delete the request data from room table
    const deleteRequest = await prisma.room.delete({
      where: {
        id: id
      }
    })
  }

  return NextResponse.json({data: res})
}