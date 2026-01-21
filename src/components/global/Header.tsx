import Link from "next/link";

export const Header = () => {
    return (
        <header className="shrink-0 border-b border-secondary/70 bg-primary/80 backdrop-blur-sm py-4 sticky top-0 z-10 flex items-center h-[65px]">
        <div className="mx-auto flex items-center justify-between w-full px-8">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-linear-to-br from-primary to-accent"></div>
            <p className="text-xl font-bold tracking-tight text-secondary lg:text-2xl">
              SaaS Product
            </p>
          </div>
          <nav className="flex items-center gap-8">
            <Link href="/login">Login</Link>
            <Link href="/signup">Signup</Link>
            <Link href="/modules/dashboard">Dashboard</Link>
          </nav>
        </div>
      </header>
    )
}