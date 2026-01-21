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
    <div className="rounded-lg border border-secondary/10 bg-primary/50 p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-secondary">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="border-b border-secondary/5 pb-4 last:border-0 last:pb-0"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="font-medium text-secondary">{activity.title}</p>
                <p className="mt-1 text-sm text-secondary/60">
                  {activity.description}
                </p>
              </div>
              <span className="text-xs text-secondary/40">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
