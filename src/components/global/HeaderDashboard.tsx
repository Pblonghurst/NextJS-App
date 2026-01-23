import Link from "next/link";

export const HeaderDashboard = () => {
    return (
    <header className="border-b border-secondary/70 bg-primary/80 backdrop-blur-sm py-4 flex items-center h-[65px] ">
        <div className="mx-auto flex items-center justify-between w-full px-8 h-full">
            <h2 className="text-2xl !m-0 font-bold text-secondary">Header Dashboard</h2>
            <nav className="flex items-center gap-4">
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/settings">Settings</Link>
                <Link href="/profile">Profile</Link>
            </nav>
        </div>
      </header>
    )
}