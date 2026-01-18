import { ArrowRight } from "lucide-react";

export function About() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-8 bg-primary"></div>
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                About Us
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gray-900">Our Legacy</span>{" "}
              <span className="text-gray-600">As a Sports Academy</span>
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-gray-600 text-lg leading-relaxed">
                At Strivor Sports Academy, we believe every child should enjoy
                learning, growing and achieving their full potential through the
                power of sports. Our mission is to inspire the next generation
                of athletes by providing a safe, supportive, and engaging
                environment where young people can develop their skills,
                confidence, and love for the game.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We understand that sport is about more than just competition.
                It's about teamwork, discipline, resilience, and respect. That's
                why our programs focus on nurturing both physical ability and
                personal growth, helping every participant to become not just a
                better player, but a better person.
              </p>
            </div>
            <button className="group flex items-center gap-2 bg-primary hover:bg-primary-50 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
              Learn More
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://plus.unsplash.com/premium_photo-1685055940547-70f23a76f5a7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Football training legacy"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
