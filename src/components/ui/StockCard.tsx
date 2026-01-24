import { TrendingDown, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/Card";

export interface StockCardProps {
  symbol?: string;
  name?: string;
  price?: number;
  change?: number; // percent, can be negative
}

export function StockCard({ symbol, name, price, change }: StockCardProps) {
  const isUp = change && change >= 0;
  const Icon = isUp ? TrendingUp : TrendingDown;

  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-secondary">{symbol}</p>
          <p className="small truncate">{name}</p>
        </div>

        <div
          className={`inline-flex items-center gap-1 rounded-full border px-2 py-1 text-xs font-medium ${
            isUp
              ? "border-accent/30 bg-accent/10 text-light-primary"
              : "border-secondary/30 bg-secondary/20 text-light-primary"
          }`}
        >
          <Icon className="h-4 w-4" />
          <span>{isUp ? "+" : ""}{change}%</span>
        </div>
      </div>

      <div className="mt-5 flex items-end justify-between">
        <div>
          <p className="text-xs text-light-primary/60">Price</p>
          <p className="mt-1 text-3xl font-bold text-secondary">
            ${price}
          </p>
        </div>

        <div className="h-9 w-24 rounded-lg bg-linear-to-r from-accent/10 via-secondary/10 to-accent/5" />
      </div>
    </Card>
  );
}

