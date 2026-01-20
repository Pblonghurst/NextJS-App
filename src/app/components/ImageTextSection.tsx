interface ImageTextSectionProps {
  title: string;
  description: string;
  imagePosition?: "left" | "right";
}

export const ImageTextSection = ({ 
  title, 
  description, 
  imagePosition = "left" 
}: ImageTextSectionProps) => {
  const isImageLeft = imagePosition === "left";

  return (
    <div className="mx-auto max-w-7xl">
      <div className={`flex flex-col items-center gap-8 lg:flex-row lg:gap-12 ${isImageLeft ? "" : "lg:flex-row-reverse"}`}>
        {/* Image placeholder */}
        <div className="w-full shrink-0 lg:w-1/2">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-foreground/10 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 backdrop-blur-sm">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent opacity-60"></div>
                <p className="text-sm font-medium text-foreground/50">Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="w-full lg:w-1/2">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="text-base leading-relaxed text-foreground/70 md:text-lg lg:text-xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
