import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request){
  const res = await request.json();
  console.log(res);
  const {id, status} = res;

  const result = await prisma.room.update({
    where: {
      id: id
    },
    data: {
      status: status
    }  
  })

  return NextResponse.json({data: res})
}