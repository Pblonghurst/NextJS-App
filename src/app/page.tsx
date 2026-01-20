"use server";

import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Hero } from "@/app/components/Hero";
import { FeatureSection } from "@/app/components/FeatureSection";
import { ImageTextSection } from "@/app/components/ImageTextSection"; 
import { ButtonLogin } from "./modules/auth/components/ButtonLogin";
import { ButtonSignUp } from "./modules/auth/components/ButtonSignUp";
import { Footer } from "@/components/Footer";

export default async function Home() {
  const session = await auth();
  
  // Redirect to dashboard if user is already signed in
  if (session?.user) {
    redirect("/modules/dashboard");
  }

  const features = [
    {
      title: "Powerful Features",
      description: "Access all the tools you need to manage your business efficiently.",
    },
    {
      title: "Secure & Reliable",
      description: "Your data is protected with enterprise-grade security measures.",
    },
    {
      title: "Easy to Use",
      description: "Intuitive interface designed for users of all skill levels.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-background via-background to-primary/5">
      {/* Decorative background elements */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl"></div>
      </div>

      <header className="relative shrink-0 border-b border-foreground/5 bg-background/80 backdrop-blur-sm px-6 py-4 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent"></div>
            <h1 className="text-xl font-bold tracking-tight text-foreground lg:text-2xl">
              SaaS Product
            </h1>
          </div>
          <nav className="flex items-center gap-3">
            <ButtonLogin variant="secondary" />
            <ButtonSignUp variant="accent" />
          </nav>
        </div>
      </header>
      
      <main className="relative flex flex-col">
        {/* Hero Section */}
        <section className="flex min-h-screen flex-col items-center justify-center px-4 py-0 lg:px-6 lg:py-0">
          <Hero
            title="Welcome to Our SaaS Platform"
            subtitle="Transform your workflow with our powerful, easy-to-use solution. Get started today and experience the difference."
          >
            <ButtonSignUp variant="accent" />
            <ButtonLogin variant="primary" />
          </Hero>
        </section>

        {/* Feature Cards Section */}
        <section className="relative w-full px-4 py-16 lg:px-6 lg:py-24">
          <FeatureSection
            title="Why Choose Us"
            subtitle="Everything you need to succeed"
            features={features}
          />
        </section>

        {/* Image and Text Section */}
        <section className="relative w-full px-4 py-16 lg:px-6 lg:py-24">
          <ImageTextSection
            title="Built for Modern Teams"
            description="Our platform is designed with your team in mind. Collaborate seamlessly, work efficiently, and scale effortlessly. Join thousands of teams already using our solution to transform their workflow."
            imagePosition="right"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
