import prisma from "@/lib/prisma";
import Post from "../../components/Post";
import PaginationControl from "@/app/components/PaginationControl";

async function getRoomData(){
  const posts = await prisma.room.findMany({
    // sort from createdAt
    orderBy: {
      createdAt: 'desc'
    },
  })
  return posts
}

export default async function Admin({
  searchParams,} : {
  searchParams: {[key: string]: string | string[] | undefined}
}) {
  const posts = await getRoomData()

  const page = searchParams['page'] ?? '1'
  const perPage = searchParams['perPage'] ?? '5'

  const start = (Number(page) - 1) * Number(perPage)
  const end = start + Number(perPage)

  const entries = posts.slice(start, end)

  return (
    <main className="flex flex-col items-center justify-between text-xs">
      <h1 className="text-4xl font-bold p-10">Request Data</h1>
      <table className="w-full text-center bg-white border-2">
        <thead>
          <tr className="border">
            <th className="p-2 border" >Name</th>
            <th className="p-2 border" >NIM</th>
            <th className="p-2 border" >Room</th>
            <th className="p-2 border" >Start Session</th>
            <th className="p-2 border" >Date</th>
            <th className="p-2 border" >Accept Request</th>
          </tr>
        </thead>
        <tbody>
          {/* If theres no data to shown, put one td with note */}
          {/* Else show data */}
          {entries?.length === 0 ? (
            <tr>
              <td colSpan={6} className="p-2 border">
                No Request Available at The Moment
              </td>
            </tr>
          ) : (
            entries?.map((entry) => {
              return(
                <tr key={entry?.id}>
                  <Post
                    id={entry?.id}
                    user_name={entry?.user_name}
                    user_nim={entry?.user_nim}
                    user_mail={entry?.user_mail}
                    room_name={entry?.room_name}
                    startSession={entry?.startSession}
                    startDate={entry?.startDate}
                    status={entry?.status}
                  />
                </tr>
              )
            })
          )}
        </tbody>
      </table>
      <PaginationControl hasNextPage={end < posts.length} hasPrevPage={start > 0} />
    </main>
  );
}
