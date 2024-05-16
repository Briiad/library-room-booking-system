import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { error } from "console";

export async function POST(request: Request){
  const res = await request.json();
  const {name, nim, mail, roomName, startDate, startSession} = res;

  // Check if there is the same data on room and history table
  const check = await prisma.room.findFirst({
    where: {
      room_name: roomName,
      startDate: startDate,
      startSession: startSession
    }
  })

  if (check) {
    return NextResponse.json({statusText: "Date already booked, Please choose another date or room."}, {status: 400})
  } else {
    const result = await prisma.room.create({
      data: {
        user_name: name,
        user_nim: nim,
        user_mail: mail,
        room_name: roomName,
        startSession: startSession,
        startDate: startDate
      }
    })
    return NextResponse.json({data: result}, {status: 202})
  }
}