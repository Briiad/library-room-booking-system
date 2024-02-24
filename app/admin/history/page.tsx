import prisma from "@/lib/prisma";
import History from "../../components/History";

async function getHistoryData(){
  const histories = await prisma.history.findMany()
  return histories
}

export default async function Admin() {
  const histories = await getHistoryData()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-xs">
      {
        histories.map((history) => {
          return(
            <History
              key={history.id}
              user_name={history.user_name}
              user_nim={history.user_nim}
              room_name={history.room_name}
              startSession={history.startSession}
              // Make Date to String and Format it (DD/MM/YYYY)
              startDate={history.startDate}
            />
          )
        })
      }
    </main>
  );
}