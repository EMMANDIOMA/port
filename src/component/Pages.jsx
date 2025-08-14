"use client";

import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Pages = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const cardsRef = useRef([]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Intersection Observer for page cards
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.dataset.index);
            setCardsVisible((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const pageItems = [
    {
      id: 1,
      title: "Portfolio",
      description: "Showcase of my recent work",
      icon: (
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-purple-500/30">
          <svg
            className="w-6 h-6 text-white transition-all duration-500 group-hover:scale-110"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
          </svg>
        </div>
      ),
      link: "/Portfolio",
      gradient: "from-purple-500/20 via-pink-500/20 to-purple-600/20",
    },
    {
      id: 2,
      title: "Testimonials",
      description: "Client reviews and feedback",
      icon: (
        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-lg group-hover:shadow-green-500/30">
          <svg
            className="w-6 h-6 text-white transition-all duration-500 group-hover:scale-110"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      ),
      link: "",
      gradient: "from-green-500/20 via-emerald-500/20 to-green-600/20",
    },
    {
      id: 3,
      title: "Resume",
      description: "Details about my career and skills",
      icon: (
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-blue-500/30">
          <svg
            className="w-6 h-6 text-white transition-all duration-500 group-hover:scale-110"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      ),
      link: "",
      gradient: "from-blue-500/20 via-cyan-500/20 to-blue-600/20",
    },
    {
      id: 4,
      title: "Certifications",
      description: "Professional courses and achievements",
      icon: (
        <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-lg group-hover:shadow-yellow-500/30">
          <svg
            className="w-6 h-6 text-white transition-all duration-500 group-hover:scale-110"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      ),
      link: "",
      gradient: "from-yellow-500/20 via-orange-500/20 to-yellow-600/20",
    },
    {
      id: 5,
      title: "FAQ",
      description: "Answers to common questions",
      icon: (
        <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-teal-500/30">
          <span className="text-white font-bold text-lg transition-all duration-500 group-hover:scale-110">
            FAQ
          </span>
        </div>
      ),
      link: "",
      gradient: "from-teal-500/20 via-cyan-500/20 to-teal-600/20",
    },
    {
      id: 6,
      title: "Pricing",
      description: "My service rates and packages",
      icon: (
        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-lg group-hover:shadow-green-500/30">
          <svg
            className="w-6 h-6 text-white transition-all duration-500 group-hover:scale-110"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      ),
      link: "/pricing",
      gradient: "from-emerald-500/20 via-green-500/20 to-emerald-600/20",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 pb-6 text-white relative overflow-hidden">
      {/* Enhanced Navbar with Unique Dropdown */}
      <header
        className={`flex justify-between items-center bg-gray-900 px-6 py-4  relative z-50 transform transition-all duration-1000 ${
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
                item === "Pages" ? "text-white" : "text-gray-400"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item}
              {/* Unique underline animation for Pages */}
              {item === "Pages" && (
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              )}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full group-hover:w-full transition-all duration-300"></div>
            </NavLink>
          ))}
        </div>

        {/* Unique Mobile Menu Dropdown */}
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
                        item === "Pages"
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
                      {item === "Pages" && (
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
      {/* Enhanced animated background elements */}
      <div className="absolute  inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-teal-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-6xl  mx-auto relative pt-32 z-10">
        {/* Enhanced Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 pb-16">
          {pageItems.map((item, index) => (
            <NavLink
              key={item.id}
              to={item.link}
              ref={(el) => (cardsRef.current[index] = el)}
              data-index={index}
              className={`group block relative overflow-hidden bg-gray-800 border border-gray-700 rounded-3xl p-8 transition-all duration-700 cursor-pointer transform ${
                cardsVisible.includes(index)
                  ? "-translate-y-4 scale-105 opacity-100"
                  : isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-16 opacity-0"
              }`}
              style={{
                transitionDelay: `${700 + index * 150}ms`,
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {/* Animated background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  item.gradient
                } transition-opacity duration-700 rounded-3xl ${
                  cardsVisible.includes(index) ? "opacity-100" : "opacity-0"
                }`}
              ></div>

              {/* Enhanced border glow effect */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-teal-500/20 transition-opacity duration-700 -z-10 blur-xl ${
                  cardsVisible.includes(index) ? "opacity-100" : "opacity-0"
                }`}
              ></div>

              {/* Content container */}
              <div className="relative z-10">
                {/* Icon with enhanced animations */}
                <div
                  className={`mb-8 transform transition-all duration-500 ${
                    cardsVisible.includes(index)
                      ? "scale-110 -translate-y-2"
                      : ""
                  }`}
                >
                  {item.icon}
                </div>

                {/* Title with staggered animation */}
                <h3
                  className={`text-3xl font-bold mb-4 transition-all duration-500 transform leading-tight ${
                    cardsVisible.includes(index)
                      ? "text-white translate-x-2"
                      : ""
                  }`}
                >
                  {item.title.split(" ").map((word, wordIndex) => (
                    <span
                      key={wordIndex}
                      className="inline-block transition-transform duration-300"
                      style={{
                        transitionDelay: `${wordIndex * 100}ms`,
                        transform: cardsVisible.includes(index)
                          ? "translateY(-2px)"
                          : "translateY(0)",
                      }}
                    >
                      {word}{" "}
                    </span>
                  ))}
                </h3>

                {/* Description with enhanced animation */}
                <p
                  className={`text-gray-400 text-lg leading-relaxed transition-all duration-500 transform mb-6 ${
                    cardsVisible.includes(index)
                      ? "text-gray-300 translate-x-2"
                      : ""
                  }`}
                >
                  {item.description}
                </p>

                {/* Enhanced Read More Indicator */}
                <div
                  className={`flex items-center text-blue-400 transition-all duration-500 transform ${
                    cardsVisible.includes(index)
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8"
                  }`}
                >
                  <span className="text-sm font-semibold mr-2">Explore</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      cardsVisible.includes(index) ? "translate-x-2" : ""
                    }`}
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
                </div>

                {/* Animated progress bar */}
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 rounded-full transition-all duration-700 ${
                    cardsVisible.includes(index) ? "w-full" : "w-0"
                  }`}
                ></div>
              </div>

              {/* Floating particles on hover */}
              <div
                className={`absolute top-4 right-4 w-2 h-2 bg-blue-400/30 rounded-full transition-opacity duration-500 ${
                  cardsVisible.includes(index)
                    ? "opacity-100 animate-ping"
                    : "opacity-0"
                }`}
              ></div>
              <div
                className={`absolute bottom-4 left-4 w-1 h-1 bg-purple-400/30 rounded-full transition-opacity duration-700 ${
                  cardsVisible.includes(index)
                    ? "opacity-100 animate-pulse"
                    : "opacity-0"
                }`}
              ></div>
            </NavLink>
          ))}
        </div>

        {/* Enhanced floating animation elements */}
        <div className="fixed top-20 left-10 w-3 h-3 bg-blue-500 rounded-full animate-pulse opacity-40"></div>
        <div className="fixed top-40 right-20 w-2 h-2 bg-purple-500 rounded-full animate-ping opacity-30"></div>
        <div className="fixed bottom-32 left-20 w-2 h-2 bg-teal-500 rounded-full animate-bounce opacity-35"></div>
        <div className="fixed bottom-20 right-10 w-1 h-1 bg-pink-500 rounded-full animate-pulse opacity-40"></div>
        <div className="fixed top-1/2 left-5 w-1 h-1 bg-yellow-500 rounded-full animate-ping opacity-25"></div>
        <div className="fixed top-3/4 right-5 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce opacity-30"></div>
      </div>
    </div>
  );
};

export default Pages;
