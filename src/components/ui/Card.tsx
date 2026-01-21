import { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

interface CardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

export function Card({ children, className = "", title, description }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-secondary/10 bg-primary/80 p-6 shadow-sm ${className}`}
    >
      {/* title */}
      {title && (
        <h3 className="mb-2">
          {title}
        </h3>
      )}
      
      {/* description */}
      {description && (
        <p className="mb-4">
          {description}
        </p>
      )}
      <Button text="Click me" />
      {children}
    </div>
  );
}
