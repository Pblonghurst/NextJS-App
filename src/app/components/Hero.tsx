import { ReactNode } from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export const Hero = ({ title, subtitle, children }: HeroProps) => {
  return (
    <section className="flex w-full max-w-4xl flex-col items-center justify-center text-center">
      {/* Badge */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/60 px-4 py-1.5 text-xs font-medium text-foreground/70 backdrop-blur-sm lg:text-sm">
        <span className="h-2 w-2 animate-pulse rounded-full bg-accent"></span>
        Now available
      </div>

      <h1 className="mb-4 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-5xl lg:text-6xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mb-8 max-w-2xl text-base leading-relaxed text-foreground/70 md:text-lg lg:mb-10 lg:text-xl">
          {subtitle}
        </p>
      )}
      {children && (
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:gap-5">
          {children}
        </div>
      )}
    </section>
  );
};
