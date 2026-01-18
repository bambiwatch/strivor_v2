import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import LOGO from "../assets/logo-1.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 bg-transparent text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link
              to="/"
              className="text-2xl font-bold !text-white transition-colors uppercase"
            >
              <img src={LOGO} className="w-80" />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link
              to="/"
              className="!text-white hover:!text-primary-50 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="!text-white hover:!text-primary-50 transition-colors duration-200"
            >
              Services
            </Link>

            <Link
              to="/contact"
              className="!text-white hover:!text-primary-50 transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Get Started Button */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-primary hover:bg-primary-50 text-white !text-white px-6 py-2.5 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-gray-900/95 backdrop-blur-sm rounded-lg mt-2 ${
            isMenuOpen
              ? "max-h-[500px] opacity-100 pb-4"
              : "max-h-0 opacity-0 pb-0"
          }`}
        >
          <div className="flex flex-col space-y-2 pt-4">
            <Link
              to="/"
              className="px-4 py-2 text-white hover:bg-gray-800 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="px-4 py-2 text-white hover:bg-gray-800 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Programs
            </Link>
            <a
              href="#blog"
              className="px-4 py-2 text-white hover:bg-gray-800 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </a>
            <Link
              to="/contact"
              className="px-4 py-2 text-white hover:bg-gray-800 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="#testimonial"
              className="px-4 py-2 text-white hover:bg-gray-800 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonial
            </a>
            <div className="pt-4 px-4">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-50 text-white px-6 py-3 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
