import prisma from '@/lib/prisma'
import Calendar from './Calendar'

async function getHistoryData(){
  const histories = await prisma.history.findMany({
    // where status is accepted
    where: {
      status: "accepted"
    }
  })
  return histories
}

export default async function Cek_Ruangan(){
  const histories = await getHistoryData()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-36 text-xs">
      <Calendar data={histories} />
    </main>
  );
}