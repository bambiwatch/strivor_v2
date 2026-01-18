import { Hero } from "../components/Hero";
import { TrainingPrograms } from "../components/TrainingPrograms";
import { About } from "../components/About";
import { CTASection } from "../components/CTASection";
import { Testimonials } from "../components/Testimonials";

const Home = () => {
  return (
    <div className="relative">
      {/* Full-width Hero Section */}
      <Hero />

      {/* Training Programs Section */}
      <TrainingPrograms />

      {/* Bottom Sections */}
      <About />
      <Testimonials />

      <CTASection />
    </div>
  );
};

export default Home;
