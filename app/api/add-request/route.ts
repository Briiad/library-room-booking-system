import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request){
  const res = await request.json();
  console.log(res);
  const {name, nim, mail, roomName, startDate, startSession} = res;

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

  return NextResponse.json({data: res})
}