"use client";

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaGripLinesVertical, FaBars } from "react-icons/fa6";
import { FaDev } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
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
            className={`flex justify-between items-center px-6 pt-3 h-[5vh] transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "-translate-y-8 opacity-0"
            }`}
          >
            <h1 className="text-white text-3xl font-serif hover:text-blue-400 transition-colors duration-300 cursor-pointer">
              Emmanuel
            </h1>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white text-2xl hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
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
                    className={`transition-all duration-300 hover:text-blue-400 hover:scale-105 transform ${
                      item === "Home" ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {item}
                  </NavLink>
                )
              )}
            </div>
          </header>

          {/* Mobile Menu - Outside header for better positioning */}
          {menuOpen && (
            <>
              <div
                className="fixed inset-0 bg-black/50 z-[9998]"
                onClick={toggleMenu}
              ></div>
              <div className="fixed top-16 right-4 bg-gray-800 backdrop-blur-sm p-6 rounded-xl z-[9999] border border-gray-700 shadow-2xl min-w-[180px] animate-in slide-in-from-top-2">
                <div className="flex flex-col gap-4">
                  {["Home", "About", "Pages", "Blog", "Contact"].map(
                    (item, index) => (
                      <NavLink
                        key={item}
                        to={item === "Home" ? "/" : `/${item}`}
                        className={`transition-all duration-300 hover:text-blue-400 hover:scale-105 transform py-3 px-4 rounded-lg hover:bg-gray-700 text-center ${
                          item === "Home"
                            ? "text-white bg-gray-700"
                            : "text-gray-400"
                        }`}
                        style={{ animationDelay: `${index * 100}ms` }}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item}
                      </NavLink>
                    )
                  )}
                </div>
              </div>
            </>
          )}

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
              className={`min-h-[35vh] pl-5 pt-3 pb-4 flex w-[90%] sm:w-[45%] md:w-[30%] lg:w-[15vw] sm:min-h-[40vh] md:min-h-[45vh] bg-[#252734] rounded-xl border border-gray-600 transition-all duration-700 group cursor-pointer transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : cardIndex % 2 === 0
                  ? "-translate-y-16 opacity-0"
                  : "translate-y-16 opacity-0"
              }`}
              style={{
                transitionDelay: `${1100 + cardIndex * 250}ms`,
              }}
            >
              <div className="text-white flex flex-col gap-[9px] relative">
                <p className="text-2xl text-blue-400 transition-all duration-300 transform">
                  {card.icon}
                </p>
                <p className="text-white transition-colors duration-300 font-semibold text-lg">
                  {card.title}
                </p>

                {card.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className={`flex items-start text-[grey] gap-2 hover:text-gray-300 transition-all duration-300 hover:translate-x-2 transform cursor-pointer py-1`}
                    style={{ transitionDelay: `${itemIndex * 50}ms` }}
                  >
                    <p className="hover:text-blue-400 transition-colors duration-300">
                      <MdKeyboardDoubleArrowRight />
                    </p>
                    <span className="hover:text-white transition-colors duration-200 text-sm sm:text-base leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-500 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-teal-500 rounded-full animate-bounce opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-indigo-500 rounded-full animate-ping opacity-60"></div>
      </section>
    </>
  );
};

export default Home;
