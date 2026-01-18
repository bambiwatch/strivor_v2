import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { PageHero } from "../components/PageHero";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus({
        type: "success",
        message:
          "Thank you! Your message has been sent successfully. We'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Get In Touch"
        description="Have a question or want to learn more about our services? We'd love to hear from you."
        imageUrl="https://images.unsplash.com/photo-1601176682258-172d20729a0c?q=80&w=1609&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imageAlt="Contact us"
      />

      {/* Contact Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center lg:text-left">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 lg:w-12 lg:h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Mail className="h-7 w-7 lg:h-6 lg:w-6 text-white" />
                  </div>
                  <div className="text-center lg:text-left">
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:info@strivorsports.com"
                      className="text-gray-600 hover:text-primary transition-colors break-all"
                    >
                      info@strivorsports.com
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 lg:w-12 lg:h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Phone className="h-7 w-7 lg:h-6 lg:w-6 text-white" />
                  </div>
                  <div className="text-center lg:text-left">
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a
                      href="tel:+441234567890"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      +44 123 456 7890
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 lg:w-12 lg:h-12 bg-primary rounded-lg flex items-center justify-center">
                    <MapPin className="h-7 w-7 lg:h-6 lg:w-6 text-white" />
                  </div>
                  <div className="text-center lg:text-left">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      Oxfordshire & West Berkshire
                      <br />
                      United Kingdom
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 text-white">
              <div className="bg-gray-900 rounded-lg shadow-lg p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-1 h-10 bg-primary"></div>
                  <span className="text-3xl font-bold uppercase tracking-wider">
                    About Us
                  </span>
                </div>
                {submitStatus.type && (
                  <div
                    className={`mb-6 p-4 rounded-lg ${
                      submitStatus.type === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium  mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium  mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-white mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="+44 123 456 7890"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-white mb-2"
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border text-white border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      >
                        <option value="" className="text-black">
                          Select a subject
                        </option>
                        <option value="general" className="text-black">
                          General Inquiry
                        </option>
                        <option value="parents" className="text-black">
                          For Parents
                        </option>
                        <option value="schools" className="text-black">
                          For Schools
                        </option>
                        <option
                          value="After School Clubs"
                          className="text-black"
                        >
                          After School Clubs
                        </option>
                        <option
                          value="One to One Coaching"
                          className="text-black"
                        >
                          One to One Coaching
                        </option>
                        <option value="Holiday Camps" className="text-black">
                          Holiday Camps
                        </option>
                        <option value="other" className="text-black">
                          Other
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:bg-primary-700 hover:scale-105 hover:shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
