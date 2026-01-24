import Link from "next/link";
import { InputSearch } from "@/components/ui/InputSearch";

type DashboardUser = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
} | null;

function getInitials(nameOrEmail?: string | null) {
  if (!nameOrEmail) return "U";
  const cleaned = nameOrEmail.trim();
  if (!cleaned) return "U";
  const parts = cleaned.split(/\s+/).slice(0, 2);
  const initials = parts.map((p) => p[0]?.toUpperCase()).join("");
  return initials || "U";
}

export const HeaderDashboard = ({ user }: { user: DashboardUser }) => {
    return (
    <header className="shrink-0 border-b border-secondary/70 bg-primary/80 backdrop-blur-sm py-3 sticky top-0 z-10 flex items-center h-[65px]">
        <div className="mx-auto flex items-center justify-between w-full px-6 h-full gap-6">
            <div className="hidden md:flex flex-1 max-w-xl">
              <InputSearch placeholder="Search dashboard…" />
            </div>

            <nav className="flex items-center gap-6 shrink-0">
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/marketing">Marketing</Link>
                <Link href="/portfolio">Portfolio</Link>

                <div className="ml-2 flex items-center gap-3 rounded-2xl border border-white/5 bg-secondary/25 px-3 py-2">
                  <div className="hidden sm:flex leading-tight">
                    <p className="text-xs text-light-primary/60">Signed in as</p>
                    <p className="text-sm font-medium text-light-primary/90 max-w-[200px] truncate">
                      {user?.email ?? user?.name ?? "User"}
                    </p>
                  </div>
                  <div className="h-9 w-9 rounded-full bg-accent/20 border border-accent/25 flex items-center justify-center text-sm font-bold text-light-primary">
                    {getInitials(user?.name ?? user?.email)}
                  </div>
                </div>
            </nav>
        </div>
      </header>
    )
}