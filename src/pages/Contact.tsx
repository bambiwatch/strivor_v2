import { Mail, Instagram, Send } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { PageHero } from "../components/PageHero";

export default function Contact() {
  const [state, handleSubmit] = useForm("mdadryvp");

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
                  <div className="shrink-0 w-14 h-14 lg:w-12 lg:h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Mail className="h-7 w-7 lg:h-6 lg:w-6 text-white" />
                  </div>
                  <div className="text-center lg:text-left">
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:strivorsports.com"
                      className="text-gray-600 hover:text-primary transition-colors break-all"
                    >
                      Info@StrivorSports.com
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4">
                  <div className="shrink-0 w-14 h-14 lg:w-12 lg:h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Instagram className="h-7 w-7 lg:h-6 lg:w-6 text-white" />
                  </div>
                  <div className="text-center lg:text-left">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Instagram
                    </h3>
                    <a
                      href="https://www.instagram.com/strivor_sports_academy"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      @strivor_sports_academy
                    </a>
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
                {state.succeeded ? (
                  <div className="mb-6 p-4 rounded-lg bg-green-50 text-green-800 border border-green-200">
                    Thank you! Your message has been sent successfully. We'll
                    get back to you soon.
                  </div>
                ) : (
                  <form
                    action="https://formspree.io/f/mdadryvp"
                    method="POST"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-white placeholder-gray-400"
                          placeholder="John Doe"
                        />
                        <ValidationError
                          prefix="Name"
                          field="name"
                          errors={state.errors}
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-white placeholder-gray-400"
                          placeholder="john@example.com"
                        />
                        <ValidationError
                          prefix="Email"
                          field="email"
                          errors={state.errors}
                          className="text-red-500 text-sm mt-1"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-white placeholder-gray-400"
                          placeholder="+44 123 456 7890"
                        />
                        <ValidationError
                          prefix="Phone"
                          field="phone"
                          errors={state.errors}
                          className="text-red-500 text-sm mt-1"
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
                          required
                          className="w-full px-4 py-3 border text-white border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-gray-800 [&_option]:bg-gray-800 [&_option]:text-white"
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="parents">For Parents</option>
                          <option value="schools">For Schools</option>
                          <option value="After School Clubs">
                            After School Clubs
                          </option>
                          <option value="One to One Coaching">
                            One to One Coaching
                          </option>
                          <option value="Holiday Camps">Holiday Camps</option>
                          <option value="other">Other</option>
                        </select>
                        <ValidationError
                          prefix="Subject"
                          field="subject"
                          errors={state.errors}
                          className="text-red-500 text-sm mt-1"
                        />
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
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none text-white placeholder-gray-400"
                        placeholder="Tell us how we can help you..."
                      />
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:bg-primary-700 hover:scale-105 hover:shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
                    >
                      {state.submitting ? (
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
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
