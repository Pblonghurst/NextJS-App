"use server";

import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { ButtonLogout } from "../auth/components/ButtonLogout";
import { StatsCard } from "./components/StatsCard";
import { Counter } from "./components/Counter";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  const stats = [
    {
      title: "Total Users",
      value: "1,234",
    },
    {
      title: "Revenue",
      value: "$45,678",
    },
    {
      title: "Active Projects",
      value: "24",
    },
    {
      title: "Tasks Completed",
      value: "156",
    },
  ];


  return (
    <div className="min-h-screen bg-primary">
      <header className="border-b border-secondary/10 bg-primary/50 px-4 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <h1 className="text-2xl font-bold text-secondary">Dashboard</h1>
          <nav className="flex items-center gap-4">
            <span className="text-sm text-light-primary/60">
              {session.user.name || session.user.email}
            </span>
            <ButtonLogout />
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-secondary">
            Welcome back, {session.user.name || "User"}!
          </h2>
          <p className="mt-2 text-secondary/60">
            Here's what's happening with your account today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Counter Section */}
          <Counter />
      </main>
    </div>
  );
}
