import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { notFound } from "next/navigation";

export default async function Admin() {
  const session = await getServerSession(authOptions);

  if (session?.user){
    return(
      <main className="flex h-auto flex-col items-center justify-between p-24 text-xs">
        <h1 className="text-4xl font-bold">
          Welcome {session?.user.name}!
        </h1>
      </main>
    )
  } else {
    return(
      notFound()
    )
  }
}
