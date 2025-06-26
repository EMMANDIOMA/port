"use client";

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Contact = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const form = useRef();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_yh5lqf2", // ✅ Your service ID
        "template_pi47np8", // ✅ Your template ID
        form.current,
        "oUOLDAWexciQbPsJ4" // ✅ Your public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
          setIsSubmitting(false);
        },
        (error) => {
          alert("Failed to send message, try again.");
          console.log(error.text);
          setIsSubmitting(false);
        }
      );
  };

  const contactInfo = [
    {
      icon: (
        <FaEnvelope className="text-xl text-[#00df9a] transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
      ),
      text: "ofojuochidera@gmail.com",
      href: "mailto:ofojuochidera@gmail.com",
      delay: "600ms",
    },
    {
      icon: (
        <FaPhoneAlt className="text-xl text-[#00df9a] transition-all duration-300 group-hover:scale-125 group-hover:-rotate-12" />
      ),
      text: "+234 702 690 8248",
      href: "https://wa.me/2347026908248",
      delay: "800ms",
    },
    {
      icon: (
        <FaMapMarkerAlt className="text-xl text-[#00df9a] transition-all duration-300 group-hover:scale-125 group-hover:bounce" />
      ),
      text: "Umuahia, Abia State, Nigeria",
      href: null,
      delay: "1000ms",
    },
  ];

  return (
    <section
      className="bg-gray-800 text-white min-h-screen relative overflow-hidden"
      id="contact"
    >
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-teal-500/5 to-green-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* 🧭 ENHANCED HEADER SECTION */}
      <header
        className={`flex justify-between items-center px-6 py-8 h-[5vh] relative z-50 transform transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
        }`}
      >
        <h1 className="text-white text-3xl font-serif hover:text-purple-400 transition-colors duration-300 cursor-pointer">
          Emmanuel
        </h1>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
          >
            <FaBars />
          </button>
        </div>
        <div className="hidden md:flex gap-10">
          {["Home", "About", "Pages", "Blog", "Contact"].map((item, index) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item}`}
              className={`transition-all duration-300 hover:text-purple-400 hover:scale-105 transform relative group ${
                item === "Contact" ? "text-white" : "text-gray-400"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item}
              {/* Unique underline animation for active page */}
              {item === "Contact" && (
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              )}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full group-hover:w-full transition-all duration-300"></div>
            </NavLink>
          ))}
        </div>

        {/* Enhanced Mobile Menu Dropdown */}
        {menuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
              onClick={toggleMenu}
            ></div>
            <div className="fixed top-[70px] right-4 bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 backdrop-blur-lg p-8 rounded-2xl z-50 border border-purple-500/30 shadow-2xl shadow-purple-500/20 min-w-[220px] animate-in slide-in-from-top-4 duration-500">
              {/* Unique header for dropdown */}
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg">Navigation</h3>
                <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-2 rounded-full"></div>
              </div>

              <div className="flex flex-col gap-3">
                {["Home", "About", "Pages", "Blog", "Contact"].map(
                  (item, index) => (
                    <NavLink
                      key={item}
                      to={item === "Home" ? "/" : `/${item}`}
                      className={`group relative transition-all duration-400 hover:text-purple-400 transform py-4 px-6 rounded-xl text-center overflow-hidden ${
                        item === "Contact"
                          ? "text-white bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30"
                          : "text-gray-400 hover:bg-gray-700/50"
                      }`}
                      style={{
                        animationDelay: `${index * 150}ms`,
                        transform: `translateY(${menuOpen ? "0" : "20px"})`,
                        opacity: menuOpen ? 1 : 0,
                        transition: `all 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${
                          index * 150
                        }ms`,
                      }}
                      onClick={() => setMenuOpen(false)}
                    >
                      {/* Unique hover effect background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                      {/* Icon for each menu item */}
                      <div className="flex items-center justify-center gap-3 relative z-10">
                        {item === "Home" && <span className="text-lg">🏠</span>}
                        {item === "About" && (
                          <span className="text-lg">👨‍💻</span>
                        )}
                        {item === "Pages" && (
                          <span className="text-lg">📄</span>
                        )}
                        {item === "Blog" && <span className="text-lg">📝</span>}
                        {item === "Contact" && (
                          <span className="text-lg">📧</span>
                        )}
                        <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">
                          {item}
                        </span>
                      </div>

                      {/* Unique active indicator */}
                      {item === "Contact" && (
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      )}

                      {/* Hover arrow */}
                      <svg
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </NavLink>
                  )
                )}
              </div>

              {/* Unique footer for dropdown */}
              <div className="mt-6 pt-4 border-t border-gray-700/50">
                <div className="flex justify-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-200"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-400"></div>
                </div>
              </div>

              {/* Unique decorative elements */}
              <div className="absolute top-2 right-2 w-1 h-1 bg-purple-400/50 rounded-full animate-ping"></div>
              <div className="absolute bottom-2 left-2 w-1 h-1 bg-pink-400/50 rounded-full animate-pulse"></div>
            </div>
          </>
        )}
      </header>

      {/* 📬 ENHANCED CONTACT CONTENT */}
      <div className="relative z-10 px-4">
        {/* Enhanced Header */}
        <div className="text-center mb-16 pt-12">
          <h2
            className={`text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#00df9a] via-teal-400 to-green-400 bg-clip-text text-transparent transform transition-all duration-1200 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-12 opacity-0 scale-95"
            }`}
          >
            Contact Me
          </h2>
          <div
            className={`h-1 bg-gradient-to-r from-[#00df9a] to-teal-400 rounded-full mx-auto transition-all duration-1000 delay-500 ${
              isVisible ? "w-24 opacity-100" : "w-0 opacity-0"
            }`}
          ></div>
          <p
            className={`text-[#6c6d6e] mt-6 text-xl transform transition-all duration-1000 delay-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Let's get in touch
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-start gap-16 px-4 md:px-24 pb-16">
          {/* Enhanced Contact Info */}
          <div className="space-y-8 lg:w-1/2">
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className={`group transform transition-all duration-700 hover:translate-x-4 hover:scale-105 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: contact.delay }}
              >
                {contact.href ? (
                  <a
                    href={contact.href}
                    className="flex items-center gap-6 p-4 rounded-xl hover:bg-gray-700/50 transition-all duration-300 cursor-pointer relative overflow-hidden"
                  >
                    {/* Animated background glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00df9a]/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

                    <div className="relative z-10 p-3 bg-gray-700 rounded-full group-hover:bg-[#00df9a]/20 transition-all duration-300">
                      {contact.icon}
                    </div>
                    <span className="text-lg group-hover:text-[#00df9a] transition-colors duration-300 relative z-10">
                      {contact.text}
                    </span>

                    {/* Hover arrow */}
                    <svg
                      className="w-5 h-5 text-[#00df9a] opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 ml-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                ) : (
                  <div className="flex items-center gap-6 p-4 rounded-xl hover:bg-gray-700/50 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00df9a]/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

                    <div className="relative z-10 p-3 bg-gray-700 rounded-full group-hover:bg-[#00df9a]/20 transition-all duration-300">
                      {contact.icon}
                    </div>
                    <span className="text-lg group-hover:text-[#00df9a] transition-colors duration-300 relative z-10">
                      {contact.text}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Enhanced Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className={`bg-gray-700/80 backdrop-blur-sm p-8 rounded-2xl w-full lg:w-1/2 space-y-6 border border-gray-600/50 hover:border-[#00df9a]/30 transition-all duration-500 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: "1200ms" }}
          >
            {/* Enhanced form fields */}
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                className={`w-full p-4 rounded-xl bg-gray-800 text-white border transition-all duration-300 focus:outline-none focus:scale-105 ${
                  focusedField === "name"
                    ? "border-[#00df9a] shadow-lg shadow-[#00df9a]/20"
                    : "border-gray-600"
                }`}
              />
              <div
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#00df9a] to-teal-400 transition-all duration-300 ${
                  focusedField === "name" ? "w-full" : "w-0"
                }`}
              ></div>
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className={`w-full p-4 rounded-xl bg-gray-800 text-white border transition-all duration-300 focus:outline-none focus:scale-105 ${
                  focusedField === "email"
                    ? "border-[#00df9a] shadow-lg shadow-[#00df9a]/20"
                    : "border-gray-600"
                }`}
              />
              <div
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#00df9a] to-teal-400 transition-all duration-300 ${
                  focusedField === "email" ? "w-full" : "w-0"
                }`}
              ></div>
            </div>

            <div className="relative">
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                className={`w-full p-4 rounded-xl bg-gray-800 text-white border transition-all duration-300 focus:outline-none focus:scale-105 resize-none ${
                  focusedField === "message"
                    ? "border-[#00df9a] shadow-lg shadow-[#00df9a]/20"
                    : "border-gray-600"
                }`}
              ></textarea>
              <div
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#00df9a] to-teal-400 transition-all duration-300 ${
                  focusedField === "message" ? "w-full" : "w-0"
                }`}
              ></div>
            </div>

            {/* Enhanced submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`relative overflow-hidden bg-gradient-to-r from-[#00df9a] to-teal-400 text-black font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#00df9a]/30 disabled:opacity-70 disabled:cursor-not-allowed group ${
                isSubmitting ? "animate-pulse" : ""
              }`}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </>
                )}
              </span>

              {/* Button hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-[#00df9a] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </button>
          </form>
        </div>
      </div>

      {/* Enhanced floating particles */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-[#00df9a] rounded-full animate-pulse opacity-40"></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-teal-400 rounded-full animate-ping opacity-30"></div>
      <div className="absolute bottom-32 left-20 w-2 h-2 bg-green-400 rounded-full animate-bounce opacity-35"></div>
      <div className="absolute bottom-20 right-10 w-1 h-1 bg-[#00df9a] rounded-full animate-pulse opacity-40"></div>
      <div className="absolute top-1/2 left-5 w-1 h-1 bg-teal-500 rounded-full animate-ping opacity-25"></div>
      <div className="absolute top-3/4 right-5 w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce opacity-30"></div>
    </section>
  );
};

export default Contact;
