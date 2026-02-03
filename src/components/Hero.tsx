import { useRef, useState, useEffect } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import HERO_IMAGE from "../assets/hero-img.png";
import HERO_VIDEO from "../assets/video1.mp4";
import IMG_1 from "../assets/img-1.jpg";
import IMG_2 from "../assets/img-2.jpg";
import IMG_3 from "../assets/img-3.jpg";
import IMG_4 from "../assets/img-4.jpg";
import IMG_5 from "../assets/img-5.jpg";
import IMG_6 from "../assets/img-6.jpg";

const TRANSITION_MS = 420;

const HERO_CAROUSEL_ITEMS = [
  { type: "video" as const, src: HERO_VIDEO },
  { type: "image" as const, src: HERO_IMAGE, alt: "Football on field" },
  { type: "image" as const, src: IMG_1, alt: "Youth sports coaching session" },
  { type: "image" as const, src: IMG_2, alt: "Children playing soccer" },
  { type: "image" as const, src: IMG_3, alt: "Children on sports field" },
  { type: "image" as const, src: IMG_5, alt: "Youth soccer action" },
  { type: "image" as const, src: IMG_4, alt: "Children playing soccer" },
  { type: "image" as const, src: IMG_6, alt: "Youth sports training" },
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionToIndex, setTransitionToIndex] = useState<number | null>(
    null
  );
  const [transitionDirection, setTransitionDirection] = useState<
    "next" | "prev" | null
  >(null);
  const [incomingAnimate, setIncomingAnimate] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const transitionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const total = HERO_CAROUSEL_ITEMS.length;

  const getItemAtIndex = (idx: number) =>
    HERO_CAROUSEL_ITEMS[(idx + total) % total];

  // Trigger slide-in animation after incoming card is mounted
  useEffect(() => {
    if (!isTransitioning || transitionToIndex == null) return;
    const frame = requestAnimationFrame(() => setIncomingAnimate(true));
    return () => cancelAnimationFrame(frame);
  }, [isTransitioning, transitionToIndex]);

  // Play video when landing on video slide
  useEffect(() => {
    if (HERO_CAROUSEL_ITEMS[currentIndex].type === "video") {
      const t = setTimeout(() => videoRef.current?.play(), 50);
      return () => clearTimeout(t);
    }
  }, [currentIndex]);

  const startTransition = (targetIndex: number, direction: "next" | "prev") => {
    if (isTransitioning || targetIndex === currentIndex) return;
    if (videoRef.current) videoRef.current.pause();
    setIncomingAnimate(false);
    setTransitionToIndex(targetIndex);
    setTransitionDirection(direction);
    setIsTransitioning(true);
    if (transitionTimeoutRef.current)
      clearTimeout(transitionTimeoutRef.current);
    transitionTimeoutRef.current = setTimeout(() => {
      setCurrentIndex(targetIndex);
      setIsTransitioning(false);
      setTransitionToIndex(null);
      setTransitionDirection(null);
      transitionTimeoutRef.current = null;
    }, TRANSITION_MS);
  };

  const goToNext = () => {
    startTransition((currentIndex + 1) % total, "next");
  };

  const goToIndex = (idx: number) => {
    if (idx === currentIndex) return;
    startTransition(idx, idx > currentIndex ? "next" : "prev");
  };

  const renderCardMedia = (idx: number, isActive: boolean) => {
    const item = getItemAtIndex(idx);
    if (item.type === "video") {
      return (
        <video
          ref={isActive ? videoRef : undefined}
          src={item.src}
          autoPlay={isActive}
          muted
          loop
          playsInline
          className="w-full h-full object-cover rounded-2xl"
        />
      );
    }
    return (
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-full object-cover rounded-2xl"
      />
    );
  };

  const displayIndex =
    isTransitioning && transitionToIndex != null
      ? transitionToIndex
      : currentIndex;

  return (
    <section className="relative w-full bg-gray-900 text-white min-h-screen flex items-center overflow-hidden">
      {/* Football Field Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt="Football field"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient - darker at top for header visibility, lighter at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40"></div>
        {/* Additional gradient for left side content area */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative w-full max-w-[95rem] mx-auto px-2 sm:px-3 lg:px-4 pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 z-10 order-1 lg:order-1 text-center lg:text-left">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white">
              LIFE LESSON IN MOTION
            </h1>

            {/* Sub-text */}
            <p className="text-gray-200 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We work closely with primary schools to deliver safe, reliable,
              and professional sports coaching that supports children’s
              physical, social, and emotional development.
            </p>

            <p className="text-gray-200 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Our programmes focus on improving fitness, communication, and
              self-belief, while promoting positive behaviour, inclusivity, and
              a healthy, active lifestyle that extends beyond the school day.
            </p>

            {/* Join the Legends Button */}
            <button className="group flex items-center justify-center lg:justify-start gap-2 bg-primary hover:bg-primary-50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg mx-auto lg:mx-0">
              Join the Legends
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Visual - Video / Image Carousel (deck of cards) */}
          <div className="relative block z-10 order-2 lg:order-2 w-full">
            <div className="relative flex flex-col gap-3">
              <div className="relative flex items-center gap-3 w-full">
                {/* overflow-hidden clips back cards so only thin edges peek */}
                <div className="relative w-full lg:flex-1 lg:min-w-0 h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-2xl">
                  {/* Deck layers: hidden during transition to avoid visible peek on left */}
                  {!isTransitioning &&
                    [
                      {
                        offset: 2,
                        translateX: "calc(100% - 16px)",
                        scale: 0.94,
                        z: 0,
                        origin: "left",
                      },
                      {
                        offset: 1,
                        translateX: "calc(100% - 28px)",
                        scale: 0.97,
                        z: 10,
                        origin: "left",
                      },
                      {
                        offset: -1,
                        translateX: "calc(-100% + 28px)",
                        scale: 0.97,
                        z: 10,
                        origin: "right",
                      },
                    ].map(({ offset, translateX, scale, z, origin }) => {
                      const idx = (currentIndex + offset + total) % total;
                      const item = getItemAtIndex(idx);
                      const isItemVideo = item.type === "video";
                      return (
                        <div
                          key={`${offset}-${idx}`}
                          className="absolute inset-0 rounded-2xl shadow-xl transition-all duration-300 ease-out"
                          style={{
                            left: 0,
                            width: "100%",
                            height: "100%",
                            zIndex: z,
                            transform: `scale(${scale}) translateX(${translateX})`,
                            transformOrigin: `${origin} center`,
                          }}
                        >
                          {isItemVideo ? (
                            <video
                              src={item.src}
                              muted
                              loop
                              playsInline
                              className="w-full h-full object-cover rounded-2xl"
                            />
                          ) : (
                            <img
                              src={item.src}
                              alt={item.alt}
                              className="w-full h-full object-cover rounded-2xl"
                            />
                          )}
                        </div>
                      );
                    })}
                  {/* Current card slot: sliding transition or single card */}
                  {isTransitioning &&
                  transitionToIndex != null &&
                  transitionDirection != null ? (
                    <>
                      {/* Outgoing: slides left (next) or right (prev) */}
                      <div
                        className="absolute inset-0 rounded-2xl shadow-2xl z-10 transition-[transform,opacity] duration-[420ms] ease-out opacity-90"
                        style={{
                          transform:
                            transitionDirection === "next"
                              ? "translateX(-100%)"
                              : "translateX(100%)",
                        }}
                      >
                        {renderCardMedia(currentIndex, false)}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-900/30 rounded-2xl pointer-events-none" />
                      </div>
                      {/* Incoming: slides in from right (next) or left (prev) */}
                      <div
                        className="absolute inset-0 rounded-2xl shadow-2xl z-20 transition-[transform] duration-[420ms] ease-out"
                        style={{
                          transform: incomingAnimate
                            ? "translateX(0)"
                            : transitionDirection === "next"
                            ? "translateX(100%)"
                            : "translateX(-100%)",
                        }}
                      >
                        {renderCardMedia(transitionToIndex, false)}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-900/30 rounded-2xl pointer-events-none" />
                      </div>
                    </>
                  ) : (
                    <div
                      key={currentIndex}
                      className="absolute inset-0 rounded-2xl shadow-2xl z-20"
                    >
                      {renderCardMedia(currentIndex, true)}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-900/30 rounded-2xl pointer-events-none" />
                    </div>
                  )}
                </div>
                {/* Next: on mobile overlay right-center over media; on lg sit beside media */}
                <button
                  type="button"
                  onClick={goToNext}
                  aria-label="Next slide"
                  disabled={isTransitioning}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-30 lg:static lg:right-auto lg:top-auto lg:translate-y-0 shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-white/40 flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-xl hover:shadow-[0_0_24px_rgba(255,255,255,0.15)] hover:scale-105 active:scale-95 disabled:opacity-70 disabled:pointer-events-none"
                >
                  <ChevronRight
                    className="h-9 w-9 sm:h-11 sm:w-11 text-white drop-shadow-sm"
                    strokeWidth={2.5}
                  />
                </button>
              </div>
              {/* Carousel indicator: modern pill with dots + counter */}
              <div className="flex items-center justify-center mt-3 px-2">
                <div
                  className="inline-flex items-center gap-1.5 sm:gap-2 lg:gap-3 px-2 py-1.5 sm:px-3 sm:py-2 lg:px-4 lg:py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg max-w-full"
                  role="tablist"
                  aria-label="Carousel slides"
                >
                  <div className="flex items-center gap-1 sm:gap-1.5 lg:gap-2">
                    {HERO_CAROUSEL_ITEMS.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        role="tab"
                        aria-label={`Slide ${idx + 1}`}
                        aria-selected={idx === displayIndex}
                        disabled={isTransitioning}
                        onClick={() => goToIndex(idx)}
                        className={`relative rounded-full transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:pointer-events-none ${
                          idx === displayIndex
                            ? "w-5 h-1.5 sm:w-6 sm:h-2 lg:w-7 lg:h-2 bg-white shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                            : "w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/40 hover:bg-white/60 hover:scale-110"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] sm:text-xs font-medium text-white/70 tabular-nums tracking-tight border-l border-white/20 pl-1.5 sm:pl-2 lg:pl-3 whitespace-nowrap">
                    {displayIndex + 1}
                    <span className="text-white/50">/{total}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
