"use client";

import { Button } from "@/components/ui/Button";

interface QuickAction {
  id: string;
  label: string;
}

interface QuickActionsProps {
  actions: QuickAction[];
}

export function QuickActions({ actions }: QuickActionsProps) {
  const handleAction = (actionId: string, label: string) => {
    // Handle action based on id
    console.log(`Action clicked: ${label} (${actionId})`);
    // Add your action logic here
    // For example: router.push('/some-route'), open modal, etc.
  };

  return (
    <div className="rounded-lg border border-secondary/10 bg-primary/50 p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-secondary">Quick Actions</h3>
      <div className="flex flex-wrap gap-3">
        {actions.map((action) => (
          <Button
            key={action.id}
            text={action.label}
            variant="secondary"
            onClick={() => handleAction(action.id, action.label)}
          />
        ))}
      </div>
    </div>
  );
}
