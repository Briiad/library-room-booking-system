import prisma from "@/lib/prisma";
import History from "../../components/History";
import CsvConvert from "@/app/components/CsvConvert";
import HistoryControl from "@/app/components/HistoryControl";

async function getHistoryData(){
  const histories = await prisma.history.findMany({
    // sort from createdAt
    orderBy: {
      createdAt: 'desc'
    },
    // Max data is all data from the last 30 days
    where: {
      createdAt: {
        gte: new Date(new Date().setDate(new Date().getDate() - 30))
      }
    }
  })
  return histories
}

export default async function Admin({
  searchParams,} : {
  searchParams: {[key: string]: string | string[] | undefined}
}) {
  const histories = await getHistoryData()

  const page = searchParams['page'] ?? '1'
  const perPage = searchParams['perPage'] ?? '5'

  const start = (Number(page) - 1) * Number(perPage)
  const end = start + Number(perPage)

  const entries = histories.slice(start, end)
  
  // console.log(histories)
  return (
    <main className="flex h-auto flex-col items-center justify-between text-xs">
      <h1 className="text-4xl font-bold p-10">Data History</h1>
      <table className="text-center border bg-white">
        <thead>
          <tr className="border">
            <th className="p-2 border" >Name</th>
            <th className="p-2 border" >NIM</th>
            <th className="p-2 border" >Room</th>
            <th className="p-2 border" >Start Session</th>
            <th className="p-2 border" >Date</th>
            <th className="p-2 border" >Status</th>
          </tr>
        </thead>
        <tbody>
          {
            entries.map((history) => {
              return(
                <tr key={history.id}>
                  <History
                    key={history.id}
                    user_name={history.user_name}
                    user_nim={history.user_nim}
                    room_name={history.room_name}
                    startSession={history.startSession}
                    // ISO string => MM DD YYYY
                    startDate={history.startDate.toISOString().split('T')[0].split('-').reverse().join('-')}
                    status={history.status}
                  />
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <HistoryControl hasNextPage={end < histories.length} hasPrevPage={start > 0} />
      <div>
        <CsvConvert data={histories} />
      </div>
    </main>
  );
}