import { StocksGrid } from "@/app/(app)/dashboard/components/StocksGrid";

export default async function DashboardPage() {
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
      </section>

      <section className="px-0">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h3 className="text-secondary mb-1!">Stocks</h3>
            <p className="small">Today’s price action (live quotes).</p>
          </div>
        </div>

        <StocksGrid />
      </section>
    </div>
  );
}

