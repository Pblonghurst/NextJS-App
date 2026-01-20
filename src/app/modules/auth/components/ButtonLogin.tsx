'use client';

import { login } from "@/lib/actions/auth";

// Props 
interface ButtonLoginProps {
  variant?: "primary" | "secondary" | "accent";
}

export const ButtonLogin = ({ variant = "primary" }: ButtonLoginProps) => {
  // Variant classes 
  const variantClasses = {
    primary: "bg-primary text-background hover:bg-foreground",
    secondary: "bg-foreground text-background hover:bg-primary",
    accent: "bg-accent text-background hover:bg-primary"
  };
  return (
    <button
      className={`${variantClasses[variant]} px-4 py-2 rounded-md cursor-pointer transition-colors`}
      onClick={() => login()}
    >
      Sign in
    </button>
  );
};