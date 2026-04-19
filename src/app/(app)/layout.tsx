import { HeaderDashboard } from "@/components/global/HeaderDashboard";
import { SideBar } from "@/components/global/SideBar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-primary">
      <div className="flex min-h-screen w-full">
        <SideBar />
        <div className="flex min-w-0 flex-1 flex-col">
          <HeaderDashboard user={null} />
          <main className="mx-auto w-full max-w-7xl px-4 py-8 flex-1">{children}</main>
        </div>
      </div>
    </div>
  );
}
