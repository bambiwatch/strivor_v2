interface PageHeroProps {
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
}

export function PageHero({
  title,
  description,
  imageUrl = "https://images.unsplash.com/photo-1598880513655-d1c6d4b2dfbf?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  imageAlt = "Hero background",
}: PageHeroProps) {
  return (
    <section className="relative bg-gray-900 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        {/* Dark gradient - darker at top for header visibility, lighter at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/85 to-black/70"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 xl:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 leading-tight sm:leading-normal">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-blue-100 px-2 sm:px-0">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
