"use server";

import { auth } from "@/auth";
import { Hero } from "@/app/components/Hero";
import { FeatureSection } from "@/app/components/FeatureSection";
import { ImageTextSection } from "./components/ImageTextSection"; 
import { ButtonLogin } from "./modules/auth/components/ButtonLogin";
import { ButtonSignUp } from "./modules/auth/components/ButtonSignUp";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  
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
    {
      title: "Easy to Use",
      description: "Intuitive interface designed for users of all skill levels.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-primary">
      {/* Header */}
      <header className="shrink-0 border-b border-secondary/3 0 bg-primary/80 backdrop-blur-sm py-4 sticky top-0 z-10 flex items-center h-[65px]">
        <div className="mx-auto flex items-center justify-between w-full px-8">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent"></div>
            <p className="text-xl font-bold tracking-tight text-secondary lg:text-2xl">
              SaaS Product
            </p>
          </div>
          <nav className="flex items-center gap-8">
            <Link href="/login">Login</Link>
            <Link href="/signup">Signup</Link>
            <Link href="/dashboard">Dashboard</Link>
          </nav>
        </div>
      </header>
      
      <main className="relative flex flex-col">
        {/* Hero Section */}
          <Hero
            title="Elevate Your Workflow"
            subtitle="Lumina is the aesthetic SaaS platform designed for modern teams who value clarity, beauty, and focus"
          >
            <ButtonSignUp variant="accent" />
            <ButtonLogin variant="primary" />
          </Hero>

        {/* Feature Cards Section */}
          <FeatureSection
            title="Why Choose Us"
            subtitle="Everything you need to succeed"
            features={features}
          />

        {/* Image and Text Section */}

          <ImageTextSection
            title="We believe software should bring"
            description="Our philosophy is rooted in the belief that your tools should disappear, allowing your best work to surface. Organic interactions, natural motion, and a palette inspired by nature create an environment where focus thrives naturally."
          />
      </main>

      <Footer />
    </div>
  );
}
