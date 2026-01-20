"use server";

import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { ButtonLogout } from "../auth/components/ButtonLogout";
import { StatsCard } from "./components/StatsCard";
import { RecentActivity } from "./components/RecentActivity";
import { QuickActions } from "./components/QuickActions";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  const stats = [
    {
      title: "Total Users",
      value: "1,234",
      trend: { value: "+12%", isPositive: true },
    },
    {
      title: "Revenue",
      value: "$45,678",
      trend: { value: "+8%", isPositive: true },
    },
    {
      title: "Active Projects",
      value: "24",
      trend: { value: "-2%", isPositive: false },
    },
    {
      title: "Tasks Completed",
      value: "156",
      trend: { value: "+15%", isPositive: true },
    },
  ];

  const activities = [
    {
      id: "1",
      title: "New user registered",
      description: "John Doe joined the platform",
      time: "2 hours ago",
    },
    {
      id: "2",
      title: "Project updated",
      description: "Project Alpha was updated",
      time: "5 hours ago",
    },
    {
      id: "3",
      title: "Payment received",
      description: "Payment of $299 processed",
      time: "1 day ago",
    },
  ];

  const quickActions = [
    { id: "1", label: "Create Project" },
    { id: "2", label: "Add User" },
    { id: "3", label: "Generate Report" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-foreground/10 bg-background/50 px-4 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <nav className="flex items-center gap-4">
            <span className="text-sm text-foreground/60">
              {session.user.name || session.user.email}
            </span>
            <ButtonLogout />
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground">
            Welcome back, {session.user.name || "User"}!
          </h2>
          <p className="mt-2 text-foreground/60">
            Here's what's happening with your account today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card title="Overview" description="Your account at a glance">
              <p className="text-sm text-foreground/70">
                This is your main dashboard overview. You can add charts, graphs,
                and other visualizations here.
              </p>
            </Card>
          </div>
          <div>
            <RecentActivity activities={activities} />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6">
          <QuickActions actions={quickActions} />
        </div>
      </main>
    </div>
  );
}
