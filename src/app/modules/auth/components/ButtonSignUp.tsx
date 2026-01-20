'use client';

import { signUp } from "@/lib/actions/auth";

// Props 
interface ButtonSignUpProps {
  variant?: "primary" | "secondary" | "accent";
}

export const ButtonSignUp = ({ variant = "accent" }: ButtonSignUpProps) => {
  // Variant classes 
  const variantClasses = {
    primary: "bg-gradient-to-r from-primary to-primary/90 text-background hover:from-foreground hover:to-foreground/90 shadow-md hover:shadow-lg",
    secondary: "bg-background/80 border border-foreground/20 text-foreground hover:bg-foreground/5 hover:border-foreground/30 backdrop-blur-sm",
    accent: "bg-gradient-to-r from-accent to-accent/90 text-background hover:from-accent/90 hover:to-accent shadow-md hover:shadow-lg hover:shadow-accent/20"
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
