'use client';

import { signUp } from "@/lib/actions/auth";

// Props 
interface ButtonSignUpProps {
  variant?: "primary" | "secondary" | "accent";
}

export const ButtonSignUp = ({ variant = "accent" }: ButtonSignUpProps) => {
  // Variant classes 
  const variantClasses = {
    primary: "bg-gradient-to-r from-primary to-primary/90 text-light-primary hover:from-secondary hover:to-secondary/90 shadow-md hover:shadow-lg",
    secondary: "bg-primary/80 border border-secondary/20 text-secondary hover:bg-secondary/5 hover:border-secondary/30 backdrop-blur-sm",
    accent: "bg-gradient-to-r from-accent to-accent/90 text-light-primary hover:from-accent/90 hover:to-accent shadow-md hover:shadow-lg hover:shadow-accent/20"
  };
  return (
    <button
      className={`${variantClasses[variant]} px-6 py-2.5 rounded-lg cursor-pointer transition-all duration-200 font-medium text-sm lg:text-base`}
      onClick={() => signUp()}
    >
      Sign up
    </button>
  );
};
