import Link from "next/link";

export const SideBar = () => {
    return (
        <div className="flex flex-col w-[250px] p-8 gap-12"> 
            <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-linear-to-br from-primary to-accent"></div>
                <p className="text-xl font-bold tracking-tight text-secondary lg:text-2xl">
                    SaaS Product
                </p>
            </div>
            <nav className="flex flex-col gap-4">
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/settings">Settings</Link>
                <Link href="/profile">Profile</Link>
            </nav>
        </div>
    )
}   