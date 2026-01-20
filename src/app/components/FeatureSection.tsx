import { ReactNode } from "react";

interface FeatureProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

interface FeatureSectionProps {
  title?: string;
  subtitle?: string;
  features: FeatureProps[];
}

export const FeatureSection = ({ title, subtitle, features }: FeatureSectionProps) => {
  return (
    <section className="w-full shrink-0 px-4 lg:px-6">
      <div className="mx-auto max-w-5xl">
        {title && (
          <h2 className="mb-2 text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:mb-3 lg:text-4xl">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="mb-6 text-center text-sm text-foreground/60 md:text-base lg:mb-8 lg:text-lg">
            {subtitle}
          </p>
        )}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-foreground/10 bg-background/80 p-5 backdrop-blur-sm transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 lg:p-6"
            >
              {/* Decorative gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-primary/0 opacity-0 transition-opacity group-hover:opacity-5"></div>
              
              {/* Icon placeholder with gradient */}
              {feature.icon ? (
                <div className="mb-3 lg:mb-4">{feature.icon}</div>
              ) : (
                <div className="mb-3 h-10 w-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 lg:mb-4"></div>
              )}
              
              <h3 className="mb-2 text-lg font-semibold text-foreground lg:mb-3 lg:text-xl">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/65 lg:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
