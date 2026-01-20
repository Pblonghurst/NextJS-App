// Props 
interface ButtonProps {
    text: string;
    variant?: "primary" | "secondary" | "accent";
}

export const Button = ({ text, variant = "primary" }: ButtonProps) => {
    // variant classes
    const variantClasses = {
        primary: "bg-primary text-background hover:bg-foreground",
        secondary: "bg-foreground text-background hover:bg-primary",
        accent: "bg-accent text-background hover:bg-primary"
    };
    
    return (
        <button className={`${variantClasses[variant]} px-4 py-2 rounded-md cursor-pointer transition-colors`}>
            {text}
        </button>
    )
}