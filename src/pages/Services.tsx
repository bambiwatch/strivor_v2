import { PageHero } from "../components/PageHero";
import { TrainingProgramsDetailed } from "../components/TrainingProgramsDetailed";

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title="Our Services"
        description="Empowering young athletes through expert coaching, inclusive programs, and innovative sports education solutions"
        imageUrl="https://images.unsplash.com/photo-1598880513655-d1c6d4b2dfbf?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imageAlt="Children sports camp"
      />

      {/* Training Programs Section */}
      <TrainingProgramsDetailed />

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              What People Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear from schools and parents who have experienced our programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Elite Youth Sports has transformed our PE program. The coaches
                are professional, engaging, and our students love every session.
                Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                  SM
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Mitchell</p>
                  <p className="text-sm text-gray-600">
                    Head Teacher, Oakwood Primary
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "My son has attended multiple camps and his confidence has grown
                tremendously. The staff are amazing and the programs are
                well-organized. Worth every penny!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                  JD
                </div>
                <div>
                  <p className="font-semibold text-gray-900">James Davis</p>
                  <p className="text-sm text-gray-600">Parent</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The SEN support program has been incredible. They've created an
                inclusive environment where all our students can participate and
                thrive. Outstanding service!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                  EW
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Emma Wilson</p>
                  <p className="text-sm text-gray-600">
                    SEN Coordinator, Riverside School
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The Soccer Tots program is perfect for my 4-year-old. She looks
                forward to every session and has learned so much. The coaches
                are patient and encouraging."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                  LT
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Lisa Thompson</p>
                  <p className="text-sm text-gray-600">Parent</p>
                </div>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "We've been using their services for three years now. The
                tournaments they organize are fantastic and really bring out the
                competitive spirit in our students."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                  MR
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Michael Roberts</p>
                  <p className="text-sm text-gray-600">
                    PE Lead, Greenfield Academy
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 6 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The HAF program during holidays has been a lifesaver. My
                children stay active, have fun, and I know they're in safe
                hands. Excellent value for money!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                  AC
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Anna Chen</p>
                  <p className="text-sm text-gray-600">Parent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
