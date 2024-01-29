import { NextResponse } from 'next/server';
import { sendEmail } from '@/app/components/EmailTemplate';

export async function POST(request: Request) {
  const res = await request.json();
  const {id, name, mail, room, startDate, endDate, status} = res;
  console.log(mail)

  const email = await sendEmail(
    'Status Regarding Your Library Room Booking Request',
    mail,
    `
      <p>Dear ${name},</p>
      <br>
      <>Your booking request for the <b> ${room} </b> has been <b> ${status} </b>. Please be informed 
      that your booking request is from <b> ${startDate} </b> to <b> ${endDate} </b>. Further usage of the room
      after the booking period is not allowed.</p>
      <br>
      <p>Regards,</p>
      <p>Library Management System</p>
      <p>Booking ID: ${id}</p>
    `,
  )

  return NextResponse.json({data: res})
}
