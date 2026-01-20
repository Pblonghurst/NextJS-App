"use server";

import { auth } from "@/auth";
import { ButtonLogin } from "./modules/auth/components/ButtonLogin";
import { ButtonLogout } from "./modules/auth/components/ButtonLogout";

export default async function Home() {
  const session = await auth();
  console.log("session", session);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {session?.user ? (
        <div className="flex flex-col items-center gap-4">
          <p className="text-lg">Welcome, {session.user.name || session.user.email}!</p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">You are signed in</p>
          <ButtonLogout />
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <p className="text-lg">You are not signed in</p>
          <ButtonLogin />
        </div>
      )}
    </div>
  );
}
