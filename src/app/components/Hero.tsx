import { ReactNode } from "react";
import { Badge } from "../../components/ui/Badge";

interface HeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export const Hero = ({ title, subtitle, children }: HeroProps) => {
  return (
      <section className="flex w-full max-w-4xl flex-col items-center justify-center text-center min-h-[calc(90vh-65px)] m-auto">
        {/* Badge */}
        <Badge />

        <h1 className="mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="mb-8 max-w-2xl text-xl!">
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
