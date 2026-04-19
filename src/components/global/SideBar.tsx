import Link from "next/link";
import { ButtonLogout } from "@/app/modules/auth/ButtonLogout";

export const SideBar = () => {
    return (
        <aside className="hidden md:flex w-[280px] shrink-0 flex-col border-r border-secondary/70 bg-dark-primary/60 backdrop-blur-sm">
            <div className="flex flex-col p-8 gap-10 h-full">
              <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-linear-to-br from-primary to-accent border border-white/5"></div>
                  <p className="text-xl font-bold tracking-tight text-secondary lg:text-2xl">
                      SaaS Product
                  </p>
              </div>

              <nav className="flex flex-col gap-2">
                  <Link className="rounded-xl px-4 py-3 bg-secondary/20 hover:bg-secondary/30 border border-white/5 transition-colors" href="/dashboard">Dashboard</Link>
                  <Link className="rounded-xl px-4 py-3 bg-secondary/20 hover:bg-secondary/30 border border-white/5 transition-colors" href="/marketing">Marketing</Link>
              </nav>

              <div className="mt-auto pt-6 border-t border-secondary/60">
                <ButtonLogout  />
              </div>
            </div>
        </aside>
    )
}   