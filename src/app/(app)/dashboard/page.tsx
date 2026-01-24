import { StatsCard } from "@/app/modules/dashboard/StatsCard";
import { StockCard } from "@/app/modules/dashboard/StockCard";

export default async function DashboardPage() {
  const stats = [
    { title: "Total Users", value: "1,234" },
    { title: "Revenue", value: "$45,678" },
    { title: "Active Projects", value: "24" },
    { title: "Tasks Completed", value: "156" },
  ];

  const stocks = [
    { symbol: "AAPL", name: "Apple", price: 192.24, change: 1.12 },
    { symbol: "TSLA", name: "Tesla", price: 214.63, change: -2.31 },
    { symbol: "MSFT", name: "Microsoft", price: 412.08, change: 0.58 },
  ];

  return (
    <div className="flex flex-col gap-10">
      <section className="px-0">
        <h2 className="text-secondary mb-2!">Dashboard</h2>
        <p className="small">Quick overview of your product and markets.</p>
      </section>

      <section className="px-0">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h3 className="text-secondary mb-1!">Stats</h3>
            <p className="small">Key metrics at a glance.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatsCard key={stat.title} {...stat} />
          ))}
        </div>
      </section>

      <section className="px-0">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h3 className="text-secondary mb-1!">Stocks</h3>
            <p className="small">Today’s price action (sample data).</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {stocks.map((s) => (
            <StockCard key={s.symbol} {...s} />
          ))}
        </div>
      </section>
    </div>
  );
}

