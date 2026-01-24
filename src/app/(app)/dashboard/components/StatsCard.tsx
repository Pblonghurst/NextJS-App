import { Card } from "@/components/ui/Card";

interface StatsCardProps {
  title: string;
  value: string | number;
}

export function StatsCard({ title, value }: StatsCardProps) {
  return (
    <Card>
      <div>
        <p className="text-sm font-medium text-secondary/60">{title}</p>
        <p className="mt-2 text-3xl font-bold text-secondary">{value}</p>
      </div>
    </Card>
  );
}
