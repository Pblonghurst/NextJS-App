import { auth } from "@/auth";
import { ButtonLogin } from "./modules/auth/login/components/ButtonLogin";

export default async function Home() {
  const session = await auth();
  console.log(session);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <p>you are not signed in</p>
      <ButtonLogin />
    </div>
  );
}
