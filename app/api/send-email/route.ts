import { NextResponse } from 'next/server';
import { sendEmail } from '@/app/components/EmailTemplate';

export async function POST(request: Request) {
  const res = await request.json();
  const {id, name, mail, room, startDate, status, startSession} = res;
  console.log(mail)

  const email = await sendEmail(
    'Status Regarding Your Library Room Booking Request',
    mail,
    `
      <p>Dear ${name},</p>
      <br>
      <p>Your booking request for the <b> ${room} </b> has been <b> ${status} </b>. This is the
      information regarding your booking:</p>
      </p>
      <p>Start Date: ${startDate}</p>
      <p>Start Session: ${startSession}</p>
      <br>

      <p>Thank you for using our service.</p>
      <p>Best Regards,</p>
      <p>Library Room Booking Service</p>
      <p>ID: ${id}</p>
    `,
  )

  return NextResponse.json({data: res})
}
