import { ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
  className?: string;
  title?: string;
  description?: string;
  icon?: ReactNode;
}

export function Card({ children, className = "", title, description, icon }: CardProps) {
  return (
    <div
      className='group p-6 rounded-2xl bg-secondary/40 border border-white/5 hover:border-primary/30 transition-all duration-300 hover:bg-secondary/60 hover:-translate-y-1'
    > 
      {/* icon */}
      {icon && (
        <div className="mb-6 h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">{icon}</div>
      )}
      {/* title */}
      {title && (
        <h3>
          {title}
        </h3>
      )}
      
      {/* description */}
      {description && (
        <p className="small">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
