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

  const result2 = await prisma.room.update({
    where: {
      id: id
    },
    data: {
      status: status
    }
  })

  return NextResponse.json({data: res})
}