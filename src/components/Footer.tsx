import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 mb-8">
          {/* Brand Logo - Left */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-2xl font-bold !text-white hover:!text-primary-200 transition-colors"
            >
              Strivor Sports Academy
            </a>
          </div>

          {/* Navigation Links - Middle */}
          <nav className="flex flex-col sm:flex-row items-center gap-6">
            <Link
              to="/services"
              className="!text-white hover:!text-primary-200 transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="!text-white hover:!text-primary-200 transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Social Media Icons - Right */}
          <div className="flex items-center gap-4">
{/*             <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="!text-white hover:!text-primary-200 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6" />
            </a> */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="!text-white hover:!text-primary-200 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
{/*             <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="!text-white hover:!text-primary-200 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="!text-white hover:!text-primary-200 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a> */}
          </div>
        </div>

        {/* Copyright Disclaimer - Below */}
        <div className="border-t border-white pt-8 text-center text-sm !text-white">
          <p>
            &copy; {currentYear} Strivor Sports Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
