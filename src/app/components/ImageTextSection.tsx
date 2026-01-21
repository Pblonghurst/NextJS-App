interface ImageTextSectionProps {
  title: string;
  description: string;
  imagePosition?: "left" | "right";
}

export const ImageTextSection = ({ 
  title, 
  description, 
}: ImageTextSectionProps) => {

  return (
    <section className="relative w-full px-4 py-24 lg:py-32">
        <div className='max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center '>
          {/* Image placeholder */}
          <div className="w-full bg-primary/20 h-full relative flex justify-end items-start flex-col aspect-4/5 rounded-2xl overflow-hidden shadow-2xl border border-secondary/5">
            <img src="/mountain2.avif" alt="Image" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 w-full flex flex-col z-10">
              <p className="small">Image Placeholder</p>
              <h3 className="mb-0!">Where calm meets productivity.</h3>
            </div>
          </div>
          
          {/* Text content */}
          <div className="w-full  ">
            {/* Title */}
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-secondary md:text-4xl lg:text-5xl">
              {title}
            </h2>
            {/* Line */}
            <div className="w-16 h-1 bg-accent/40 rounded-full mb-6 mt-6 "></div>
            {/* Description */}
            <div className="flex flex-col gap-6">
              <p className="text-base leading-relaxed text-secondary/70 md:text-lg lg:text-xl">
                {description}
              </p>

                <p className="text-base leading-relaxed text-secondary/70 md:text-lg lg:text-xl">
                  {description}
                </p>
            </div>
          </div>
        </div>
    </section>
  );
};
