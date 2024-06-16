import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request){
  const res = await request.json();
  const {id, nim, status} = res;

  const result = await prisma.history.update({
    where: {
      user_nim: nim
    },
    data: {
      status: status
    }  
  })

  // Delete the request if it's cancelled
  if (status === "cancelled") {
    await prisma.room.delete({
      where: {
        id: id
      }
    })
  }

  return NextResponse.json({data: res})
}