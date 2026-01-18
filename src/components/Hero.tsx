import { ArrowRight } from "lucide-react";
import HERO_IMAGE from "../assets/hero-img.png";

export function Hero() {
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
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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

          {/* Right Visual - Football on Field Line */}
          <div className="relative block z-10 order-2 lg:order-2">
            <div className="relative">
              <img
                src={HERO_IMAGE}
                alt="Football on field"
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-900/30 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
