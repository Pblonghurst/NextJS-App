import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

export function Card({ children, className = "", title, description }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 ${className}`}
    >
      {/* title */}
      {title && (
        <h3 className="mb-2 text-lg font-semibold text-black dark:text-zinc-50">
          {title}
        </h3>
      )}
      
      {/* description */}
      {description && (
        <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
