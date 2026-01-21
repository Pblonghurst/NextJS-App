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
    <section className="w-full shrink-0 py-24 bg-secondary/20">
      <div className="mx-auto max-w-7xl">

        {/* Title and Subtitle */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          {title && (
            <h2>
              {title}
            </h2>
          )}
          {subtitle && (
            <p>
              {subtitle}
            </p>
          )}
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-secondary/40 border border-white/5 hover:border-secondary/30 transition-all duration-300 hover:bg-secondary/60 hover:-translate-y-1"
            >
              {/* Icon placeholder with gradient */}
              {feature.icon ? (
                <div className="mb-6 lg:mb-4">{feature.icon}</div>
              ) : (
                <div className="mb-6 h-12 w-12 rounded-lg bg-accent/10"></div>
              )}
              
              <h3>
                {feature.title}
              </h3>
              <p className="small">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
