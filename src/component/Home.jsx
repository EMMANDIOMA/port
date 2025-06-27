"use client";

import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaGripLinesVertical, FaBars } from "react-icons/fa6";
import { FaDev } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [cardsVisible, setCardsVisible] = useState([]);
  const [footerVisible, setFooterVisible] = useState(false);
  const [socialVisible, setSocialVisible] = useState([]);
  const cardsRef = useRef([]);
  const footerRef = useRef(null);
  const socialRef = useRef([]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Intersection Observer for service cards
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

  useEffect(() => {
    // Intersection Observer for footer
    const footerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFooterVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      footerObserver.observe(footerRef.current);
    }

    return () => footerObserver.disconnect();
  }, []);

  useEffect(() => {
    // Intersection Observer for social icons
    const socialObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.dataset.index);
            setSocialVisible((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    socialRef.current.forEach((social) => {
      if (social) socialObserver.observe(social);
    });

    return () => socialObserver.disconnect();
  }, []);

  const serviceCards = [
    {
      id: 1,
      title: "Development skills",
      icon: <FaDev />,
      items: ["Html/Css", "Tailwind", "Javascript", "React", "Next.js"],
    },
    {
      id: 2,
      title: "services",
      icon: <FaDev />,
      items: [
        "Landing pages",
        "create webpages",
        "build your portfolio",
        "handle your sites",
        "create websites",
      ],
    },
    {
      id: 3,
      title: "Teaching",
      icon: <FaDev />,
      items: [
        "teach Html/css",
        "teach Tailwind",
        "Javascript instructor",
        "React instructor",
        "Next instructor",
      ],
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/EMMANDIOMA",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: "",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      url: "",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      url: "",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <main className="bg-gray-800 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <section className="relative z-[200]">
          <header
            className={`flex justify-between items-center px-6 pt-3 h-[5vh] relative z-50 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "-translate-y-8 opacity-0"
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
              {["Home", "About", "Pages", "Blog", "Contact"].map(
                (item, index) => (
                  <NavLink
                    key={item}
                    to={item === "Home" ? "/" : `/${item}`}
                    className={`transition-all duration-300 hover:text-purple-400 hover:scale-105 transform relative group ${
                      item === "Home" ? "text-white" : "text-gray-400"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item}
                    {/* Unique underline animation for active page */}
                    {item === "Home" && (
                      <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    )}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full group-hover:w-full transition-all duration-300"></div>
                  </NavLink>
                )
              )}
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
                    <h3 className="text-white font-semibold text-lg">
                      Navigation
                    </h3>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-2 rounded-full"></div>
                  </div>

                  <div className="flex flex-col gap-3">
                    {["Home", "About", "Pages", "Blog", "Contact"].map(
                      (item, index) => (
                        <NavLink
                          key={item}
                          to={item === "Home" ? "/" : `/${item}`}
                          className={`group relative transition-all duration-400 hover:text-purple-400 transform py-4 px-6 rounded-xl text-center overflow-hidden ${
                            item === "Home"
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
                            {item === "Home" && (
                              <span className="text-lg">🏠</span>
                            )}
                            {item === "About" && (
                              <span className="text-lg">👨‍💻</span>
                            )}
                            {item === "Pages" && (
                              <span className="text-lg">📄</span>
                            )}
                            {item === "Blog" && (
                              <span className="text-lg">📝</span>
                            )}
                            {item === "Contact" && (
                              <span className="text-lg">📧</span>
                            )}
                            <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">
                              {item}
                            </span>
                          </div>

                          {/* Unique active indicator */}
                          {item === "Home" && (
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

          <section className="relative z-0">
            <div className="md:flex md:justify-center flex flex-col items-center py-6 h-[70vh] gap-[10px]">
              <div
                className={`text-white flex-col justify-center items-center flex transform transition-all duration-1200 delay-300 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
              >
                <h1 className="text-xl md:text-2xl animate-bounce">
                  Hello i'm
                </h1>
                <h1 className="font-serif pl-5 text-3xl md:text-5xl bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 bg-clip-text text-transparent animate-pulse">
                  CHIDERA OFOJUO
                </h1>
              </div>
              <div
                className={`transform transition-all duration-1500 delay-500 ${
                  isVisible
                    ? "scale-100 opacity-100 rotate-0"
                    : "scale-75 opacity-0 rotate-12"
                }`}
              >
                <div className="relative group z-0">
                  <img
                    className={`h-[50vh] transition-all duration-700 hover:scale-105 ${
                      imageLoaded ? "blur-0" : "blur-sm"
                    }`}
                    src="./chidera.png"
                    alt="Chidera Ofojuo"
                    onLoad={() => setImageLoaded(true)}
                  />
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-teal-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>

      <section className="bg-gray-700 md:h-[fit] gap-[10px] flex flex-col h-[fit] relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div
          className={`flex text-[grey] pt-7 pl-[5px] md:pl-[350px] md:flex md:items items-center transform transition-all duration-1000 delay-700 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
          }`}
        >
          <div className="animate-pulse">
            <FaGripLinesVertical />
          </div>
          <p className="ml-2 hover:text-white transition-colors duration-300">
            My Service
          </p>
        </div>

        <div
          className={`pl-[5px] md:pl-[350px] text-2xl text-[white] font-serif pb-6 transform transition-all duration-1000 delay-900 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
          }`}
        >
          <p className="hover:text-blue-400 transition-colors duration-300 cursor-default">
            Service provide for my clients.
          </p>
        </div>

        <section className="flex items-start justify-center pb-6 flex-col sm:flex-row md:flex-row gap-4 sm:gap-6 relative z-10 px-4 sm:px-6">
          {serviceCards.map((card, cardIndex) => (
            <div
              key={card.id}
              ref={(el) => (cardsRef.current[cardIndex] = el)}
              data-index={cardIndex}
              className={`min-h-[35vh] p-4 flex w-[90%] sm:w-[45%] md:w-[30%] lg:w-[18vw] xl:w-[16vw] sm:min-h-[40vh] md:min-h-[45vh] lg:min-h-[50vh] bg-[#252734] rounded-xl border border-gray-600 transition-all duration-700 cursor-pointer transform ${
                cardsVisible.includes(cardIndex)
                  ? "translate-y-0 opacity-100 scale-105 -translate-y-2 shadow-lg shadow-blue-500/20"
                  : cardIndex % 2 === 0
                  ? "-translate-y-16 opacity-0"
                  : "translate-y-16 opacity-0"
              }`}
              style={{
                transitionDelay: `${1100 + cardIndex * 250}ms`,
              }}
            >
              <div className="text-white flex flex-col gap-2 md:gap-3 relative w-full">
                <p
                  className={`text-2xl text-blue-400 transition-all duration-300 transform ${
                    cardsVisible.includes(cardIndex)
                      ? "scale-125 rotate-12"
                      : ""
                  }`}
                >
                  {card.icon}
                </p>
                <p
                  className={`text-white transition-colors duration-300 font-semibold text-base md:text-lg lg:text-xl leading-tight ${
                    cardsVisible.includes(cardIndex) ? "text-blue-400" : ""
                  }`}
                >
                  {card.title}
                </p>

                {card.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className={`flex items-start text-[grey] gap-2 transition-all duration-300 transform cursor-pointer py-1 ${
                      cardsVisible.includes(cardIndex)
                        ? "translate-x-2 text-gray-300"
                        : ""
                    }`}
                    style={{ transitionDelay: `${itemIndex * 50}ms` }}
                  >
                    <p
                      className={`transition-colors duration-300 ${
                        cardsVisible.includes(cardIndex) ? "text-blue-400" : ""
                      }`}
                    >
                      <MdKeyboardDoubleArrowRight />
                    </p>
                    <span
                      className={`transition-colors duration-200 text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-tight ${
                        cardsVisible.includes(cardIndex) ? "text-white" : ""
                      }`}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Auto-show background glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-teal-500/5 rounded-xl transition-opacity duration-500 -z-10 blur-xl ${
                  cardsVisible.includes(cardIndex) ? "opacity-100" : "opacity-0"
                }`}
              ></div>

              {/* Auto-show progress bar */}
              <div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 rounded-full transition-all duration-1000 ${
                  cardsVisible.includes(cardIndex) ? "w-full" : "w-0"
                }`}
              ></div>
            </div>
          ))}
        </section>

        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-500 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-teal-500 rounded-full animate-bounce opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-indigo-500 rounded-full animate-ping opacity-60"></div>
      </section>

      {/* Enhanced Animated Footer Section */}
      <footer
        ref={footerRef}
        className="bg-gray-900 py-12 px-6 relative overflow-hidden"
      >
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl transition-all duration-1000 ${
              footerVisible ? "animate-pulse opacity-100" : "opacity-0"
            }`}
          ></div>
          <div
            className={`absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl transition-all duration-1000 delay-500 ${
              footerVisible ? "animate-pulse opacity-100" : "opacity-0"
            }`}
          ></div>
          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-teal-500/5 to-blue-500/5 rounded-full blur-2xl transition-all duration-1000 delay-1000 ${
              footerVisible ? "animate-pulse opacity-100" : "opacity-0"
            }`}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            {/* Enhanced Footer Title with scroll animation */}
            <h3
              className={`text-2xl md:text-3xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 bg-clip-text text-transparent transform transition-all duration-1200 ${
                footerVisible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-12 opacity-0 scale-95"
              }`}
            >
              Let's Connect
            </h3>

            {/* Animated underline */}
            <div
              className={`h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 rounded-full mx-auto mb-8 transition-all duration-1000 delay-300 ${
                footerVisible ? "w-24 opacity-100" : "w-0 opacity-0"
              }`}
            ></div>

            {/* Enhanced Social Links with staggered animations */}
            <div className="flex justify-center gap-6 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  ref={(el) => (socialRef.current[index] = el)}
                  data-index={index}
                  className={`group p-3 bg-gray-800 rounded-full transition-all duration-700 transform ${
                    socialVisible.includes(index)
                      ? "translate-y-0 opacity-100 scale-110 shadow-lg shadow-blue-500/20"
                      : "translate-y-8 opacity-0 scale-75"
                  }`}
                  style={{
                    transitionDelay: `${600 + index * 200}ms`,
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  {/* Enhanced background glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-teal-500/20 rounded-full transition-opacity duration-500 -z-10 blur-xl ${
                      socialVisible.includes(index)
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  ></div>

                  <div
                    className={`text-gray-400 transition-all duration-500 transform ${
                      socialVisible.includes(index)
                        ? "text-blue-400 scale-125 rotate-12"
                        : ""
                    }`}
                  >
                    {social.icon}
                  </div>

                  {/* Floating particles around icons */}
                  <div
                    className={`absolute -top-1 -right-1 w-2 h-2 bg-blue-400/30 rounded-full transition-opacity duration-500 ${
                      socialVisible.includes(index)
                        ? "opacity-100 animate-ping"
                        : "opacity-0"
                    }`}
                  ></div>
                </a>
              ))}
            </div>

            {/* Enhanced Copyright with animation */}
            <div
              className={`border-t border-gray-700 pt-6 transform transition-all duration-1000 delay-1200 ${
                footerVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <p className="text-gray-400 text-sm mb-2 transition-colors duration-300 hover:text-gray-300">
                © 2024 Chidera Ofojuo. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs transition-colors duration-300 hover:text-gray-400">
                Built with React & Next.js
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced floating particles with scroll-triggered animations */}
        <div
          className={`absolute top-10 left-10 w-1 h-1 bg-blue-500 rounded-full transition-all duration-1000 delay-1400 ${
            footerVisible ? "opacity-40 animate-ping" : "opacity-0"
          }`}
        ></div>
        <div
          className={`absolute top-20 right-20 w-1.5 h-1.5 bg-purple-500 rounded-full transition-all duration-1000 delay-1600 ${
            footerVisible ? "opacity-30 animate-pulse" : "opacity-0"
          }`}
        ></div>
        <div
          className={`absolute bottom-10 left-20 w-1 h-1 bg-teal-500 rounded-full transition-all duration-1000 delay-1800 ${
            footerVisible ? "opacity-35 animate-bounce" : "opacity-0"
          }`}
        ></div>
        <div
          className={`absolute bottom-20 right-10 w-2 h-2 bg-pink-500 rounded-full transition-all duration-1000 delay-2000 ${
            footerVisible ? "opacity-25 animate-ping" : "opacity-0"
          }`}
        ></div>
        <div
          className={`absolute top-1/2 left-5 w-1 h-1 bg-yellow-500 rounded-full transition-all duration-1000 delay-2200 ${
            footerVisible ? "opacity-30 animate-pulse" : "opacity-0"
          }`}
        ></div>
        <div
          className={`absolute top-3/4 right-5 w-1.5 h-1.5 bg-cyan-500 rounded-full transition-all duration-1000 delay-2400 ${
            footerVisible ? "opacity-25 animate-bounce" : "opacity-0"
          }`}
        ></div>
      </footer>
    </>
  );
};

export default Home;
