import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import IMAGE_1 from "../assets/services-1.jpg";
import IMAGE_2 from "../assets/services-2.jpg";
import IMAGE_3 from "../assets/services-3.jpg";

export function TrainingPrograms() {
  const programs = [
    {
      title: "After School Clubs",
      description:
        "We offer schools the opportunity to run an exclusive sports club for their pupils. These sessions can take place during breakfast club, lunchtime or after-school.",
      image: IMAGE_1,
    },
    {
      title: "One to One Coaching",
      description:
        "This is particularly imperative at the ages of 4+, as it's the perfect time to educate the kids particular ball developments, singular abilities, essential passing and accepting methods.",
      image: IMAGE_2,
    },
    {
      title: "Holiday Camps",
      description:
        "All camp days are held outdoors, however we have access to an indoor area if needed for Lunch and if the wear doesn't permit the children to play outside, we are still able to play games and competitions inside.",
      image: IMAGE_3,
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gray-900">Our</span>{" "}
            <span className="text-gray-600">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700">
            Choose the path that matches your ambition.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
              style={{ margin: 0, padding: 0 }}
            >
              {/* Image */}
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content - Black Background Section */}
              <div
                className="bg-gray-900 text-white p-6 rounded-b-lg"
                style={{
                  margin: 0,
                  marginTop: 0,
                  marginBottom: 0,
                  width: "100%",
                  boxSizing: "border-box",
                  flex: "1 1 auto",
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-white">
                    {program.title}
                  </h3>
                  {/* Button */}
                  <Link
                    to="/services"
                    className="w-12 h-12 rounded-lg bg-primary hover:bg-primary-50 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg flex-shrink-0"
                  >
                    <ArrowUpRight
                      className="h-8 w-8"
                      strokeWidth={3}
                      style={{ minWidth: "32px", minHeight: "32px" }}
                    />
                  </Link>
                </div>
                <p className="text-white">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
