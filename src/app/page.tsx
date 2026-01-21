"use server";

import { auth } from "@/auth";
import { Hero } from "@/app/components/Hero";
import { FeatureSection } from "@/app/components/FeatureSection";
import { ImageTextSection } from "./components/ImageTextSection"; 
import { ButtonLogin } from "./modules/auth/components/ButtonLogin";
import { ButtonSignUp } from "./modules/auth/components/ButtonSignUp";
import { Footer } from "@/components/global/Footer";
import { Header } from "@/components/global/Header";

export default async function Home() {
  const session = await auth();
  return (
    <div className="flex min-h-screen flex-col bg-primary">
      {/* Header */}
      <Header />
      
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
