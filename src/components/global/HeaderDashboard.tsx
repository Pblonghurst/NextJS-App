"use server";

import Link from "next/link";
import { InputSearch } from "@/components/ui/InputSearch";
import { auth } from "@/auth";

type DashboardUser = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
} | null;

function getInitials(nameOrEmail?: string | null) {
  return nameOrEmail?.split("@")[0]?.charAt(0) ?? "U";
}

export const HeaderDashboard = async ({ user }: { user: DashboardUser }) => {
  const session = await auth();
  console.log("session", session);

  return (
    <header className="shrink-0 border-b border-secondary/70 bg-primary/80 backdrop-blur-sm py-3 z-10 flex items-center h-[65px]">
      <div className="mx-auto flex items-center justify-between w-full px-6 h-full gap-6">
        <div className="hidden md:flex flex-1 max-w-xl">
          <InputSearch placeholder="Search dashboard…" />
        </div>

        <nav className="flex items-center gap-6 shrink-0">
          <div className="ml-2 flex items-center gap-3 rounded-2xl borde px-3 py-2">
            <div className="hidden sm:flex leading-tight">
              <p className="small">
                {session?.user?.email ?? "User"}
              </p>
            </div>
            <div className="h-9 w-9 rounded-full bg-accent/20 border border-accent/25 flex items-center justify-center">
              {getInitials(session?.user?.email ?? "User")}
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}