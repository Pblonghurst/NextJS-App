interface ActivityItem {
  id: string;
  title: string;
  description: string;
  time: string;
}

interface RecentActivityProps {
  activities: ActivityItem[];
}

export function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <div className="rounded-lg border border-foreground/10 bg-background/50 p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-foreground">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="border-b border-foreground/5 pb-4 last:border-0 last:pb-0"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="font-medium text-foreground">{activity.title}</p>
                <p className="mt-1 text-sm text-foreground/60">
                  {activity.description}
                </p>
              </div>
              <span className="text-xs text-foreground/40">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
