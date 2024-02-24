import prisma from "@/lib/prisma";
import Post from "../../components/Post";

async function getRoomData(){
  const posts = await prisma.room.findMany({
    // sort from createdAt
    orderBy: {
      createdAt: 'desc'
    },
  })
  return posts
}

export default async function Admin() {
  const posts = await getRoomData()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 text-xs">
      <table className="text-center bg-white border-2 table-fixed">
        <thead>
          <tr className="border">
            <th className="p-2 border" >ID</th>
            <th className="p-2 border" >Name</th>
            <th className="p-2 border" >NIM</th>
            <th className="p-2 border" >Room</th>
            <th className="p-2 border" >Start Session</th>
            <th className="p-2 border" >Date</th>
            <th className="p-2 border" >Accept Request</th>
          </tr>
        </thead>
        <tbody>
            {
              posts.map((post) => {
                return(
                  <tr key={post.id}>
                    <Post
                      id={post.id}
                      user_name={post.user_name}
                      user_nim={post.user_nim}
                      user_mail={post.user_mail}
                      room_name={post.room_name}
                      startSession={post.startSession}
                      // Make Date to String and Format it (DD/MM/YYYY)
                      startDate={post.startDate}
                      status={post.status}
                    />
                  </tr>
                )
              })
            }
        </tbody>
      </table>
    </main>
  );
}
