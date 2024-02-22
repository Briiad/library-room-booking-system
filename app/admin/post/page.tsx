import prisma from "@/lib/prisma";
import Post from "../../components/Post";

async function getRoomData(){
  const posts = await prisma.room.findMany()
  return posts
}

export default async function Admin() {
  const posts = await getRoomData()
  // console.log(posts)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-xs">
      {
        posts.map((post) => {
          return(
            <Post
              key={post.id}
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
          )
        })
      }
    </main>
  );
}
