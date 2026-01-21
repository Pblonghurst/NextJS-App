import { ReactNode } from "react";
import { Card } from "@/components/ui/Card";
import { Zap, Shield, Smile, Clock } from "lucide-react";

interface FeatureProps {
  title: string;
  subtitle: string;
}

export const FeatureSection = ({ title, subtitle }: FeatureProps) => {
  const features = [
    {
      title: "Powerful Features",
      description: "Access all the tools you need to manage your business efficiently.",
      icon: <Zap className="h-6 w-6 text-accent" />,
    },
    {
      title: "Secure & Reliable",
      description: "Your data is protected with enterprise-grade security measures.",
      icon: <Shield className="h-6 w-6 text-accent" />,
    },
    {
      title: "Easy to Use",
      description: "Intuitive interface designed for users of all skill levels.",
      icon: <Smile className="h-6 w-6 text-accent" />,
    },
    {
      title: "24/7 Support",
      description: "Get help whenever you need it with our round-the-clock support team.",
      icon: <Clock className="h-6 w-6 text-accent" />,
    },
  ];

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
            <Card
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              className="group hover:border-secondary/30 transition-all duration-300 hover:bg-secondary/60 hover:-translate-y-1"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
