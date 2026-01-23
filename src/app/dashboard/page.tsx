"use server";

import { auth } from "@/auth";
import { StatsCard } from "./components/StatsCard";
import { Counter } from "./components/Counter";
import { HeaderDashboard } from "@/components/global/HeaderDashboard";
import { SideBar } from "@/components/global/SideBar";

export default async function DashboardPage() {
  const session = await auth();

  // if (!session?.user) {
  //   redirect("/");
  // }

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
    <div className="min-h-screen flex ">
      <SideBar />
      <div className="flex flex-col flex-1">
        <HeaderDashboard />
        <main className="mx-auto max-w-7xl px-4 py-8">
          {/* Stats Grid */}
          <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
