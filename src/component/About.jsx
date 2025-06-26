"use client";

import { BsPlayCircle, BsArrows, BsAlignEnd } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [experienceVisible, setExperienceVisible] = useState([]);
  const experienceRef = useRef([]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Intersection Observer for experience items
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.dataset.index);
            setExperienceVisible((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    experienceRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const experienceData = [
    {
      title: "Student of Night code class",
      subtitle: "startup class of tech",
      description: `I started from scratch at Night Code Class.
Now I build websites with React and Next.js.
From HTML to APIs — I learned it all.
Real projects, real skills. Now I teach others too. Night Code Class changed my story.`,
    },
    {
      title: "Student of Learnfactory nig",
      subtitle: "Mastering skills",
      description: `I came to LearnFactory ready to grow.
Each day brought real code and new challenges.
From HTML to React — I built it all.
I learned to teach, lead, and grow fast. The
pressure was real, but so was the growth. LearnFactory shaped me into a true developer.`,
    },
    {
      title: "Javascript Instructor",
      subtitle: "Building Teams of Dev",
      description: `Teaching made me a better developer.
I shared knowledge, solved problems, and grew daily.
Watching students level up was
the real reward. This journey deepened both my skills and purpose.`,
    },
  ];

  return (
    <div className="bg-gray-800 py-0 px-0 m-0 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navbar */}
      <header
        className={`flex justify-between items-center px-6 pt-3 h-[5vh] relative z-50 transform transition-all duration-1000 ${
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
                item === "About" ? "text-white" : "text-gray-400"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item}
              {/* Unique underline animation for active page */}
              {item === "About" && (
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
                        item === "About"
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
                      {item === "About" && (
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

      {/* About Header */}
      <div className="flex flex-col gap-5 justify-center items-center pt-[80px] relative z-10">
        <h1
          className={`text-6xl transform transition-all duration-1200 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          About Me
        </h1>
        <div
          className={`border border-[#00000036] bg-gray-700 flex gap-2 justify-around md:w-[10vw] text-center rounded-lg py-2 transform transition-all duration-1000 delay-500 hover:scale-105 hover:bg-gray-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-[#6c6d6e] border-r-2 px-2">About</p>
          <p className="pr-3">About</p>
        </div>
      </div>

      {/* About Details */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-[100px] bg-gray-700 px-4 py-10 relative z-10">
        <div
          className={`bg-gray-800 shadow-md shadow-black w-full md:w-[15vw] h-[35vh] flex flex-col gap-9 items-center justify-around rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 transform ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-12 opacity-0"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <BsPlayCircle
            size={40}
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300 animate-pulse"
          />
          <button className="border md:w-[10vw] px-[13px] py-[5px] md:py-[10px] rounded-full hover:bg-blue-500 hover:border-blue-500 transition-all duration-300 hover:scale-110 transform">
            Read More
          </button>
        </div>
        <div
          className={`flex flex-col gap-5 text-center md:text-left transform transition-all duration-1000 delay-900 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
          }`}
        >
          <h1 className="text-3xl hover:text-blue-400 transition-colors duration-300 cursor-default">
            I'm Ofojuo Chidera
          </h1>
          <p className="text-2xl text-[#6c6d6e] hover:text-gray-300 transition-colors duration-300">
            JavaScript Instructor <br /> Front-end Developer
          </p>
          <p className="text-[#6c6d6e] hover:text-gray-300 transition-colors duration-300 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Quos assumenda aliquam ut cum maiores saepe velit, soluta ipsam
            omnis ratione modi.
          </p>
        </div>
      </div>

      {/* Education / Experience Section */}
      <div className="bg-gray-800 py-12 relative z-10">
        <div
          className={`flex md:gap-[40px] gap-[20px] justify-center text-2xl transform transition-all duration-1000 delay-1100 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="md:w-[15vw] text-center py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300 cursor-pointer">
            Experience
          </div>
          <p className="md:mt-1 mt-2 hover:text-blue-400 transition-colors duration-300 cursor-pointer">
            Education
          </p>
        </div>

        <div className="flex flex-col gap-10 text-white px-4 md:pl-[36%] mt-10">
          {experienceData.map((item, index) => (
            <div
              key={index}
              ref={(el) => (experienceRef.current[index] = el)}
              data-index={index}
              className={`flex gap-[30px] items-start justify-center transition-all duration-700 transform cursor-pointer relative ${
                experienceVisible.includes(index)
                  ? "translate-x-4 scale-105 opacity-100"
                  : isVisible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-16 opacity-0"
              }`}
              style={{
                transitionDelay: `${1300 + index * 300}ms`,
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {/* Animated background glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-teal-500/5 rounded-xl transition-opacity duration-500 -z-10 blur-xl ${
                  experienceVisible.includes(index)
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              ></div>

              {/* Enhanced icon section */}
              <div className="flex flex-col gap-1 mt-2 relative">
                <div
                  className={`absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-500 rounded-full transition-opacity duration-500 ${
                    experienceVisible.includes(index)
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                ></div>
                <BsArrows
                  className={`text-blue-400 transition-all duration-500 transform ${
                    experienceVisible.includes(index)
                      ? "text-blue-300 scale-125 rotate-12"
                      : ""
                  }`}
                />
                <BsAlignEnd
                  className={`text-blue-400 transition-all duration-500 transform delay-100 ${
                    experienceVisible.includes(index)
                      ? "text-blue-300 scale-125 -rotate-12"
                      : ""
                  }`}
                />

                {/* Pulsing dot */}
                <div
                  className={`w-2 h-2 bg-blue-400 rounded-full mt-2 transition-all duration-300 ${
                    experienceVisible.includes(index)
                      ? "animate-bounce"
                      : "animate-pulse"
                  }`}
                ></div>
              </div>

              {/* Enhanced content section */}
              <div
                className={`flex flex-col gap-3 flex-1 p-4 rounded-lg transition-all duration-500 ${
                  experienceVisible.includes(index) ? "bg-gray-700/30" : ""
                }`}
              >
                <h1
                  className={`text-2xl mt-2 transition-all duration-500 transform font-semibold ${
                    experienceVisible.includes(index)
                      ? "text-blue-400 translate-x-2"
                      : ""
                  }`}
                >
                  {item.title}
                </h1>
                <p
                  className={`text-[#6c6d6e] transition-all duration-500 transform delay-75 font-medium ${
                    experienceVisible.includes(index)
                      ? "text-gray-300 translate-x-2"
                      : ""
                  }`}
                >
                  {item.subtitle}
                </p>
                <p
                  className={`text-[#6c6d6e] transition-all duration-500 transform delay-150 leading-relaxed ${
                    experienceVisible.includes(index)
                      ? "text-gray-300 translate-x-2"
                      : ""
                  }`}
                >
                  {item.description.split("\n").map((line, lineIndex) => (
                    <span
                      key={lineIndex}
                      className={`inline-block transition-transform duration-300 ${
                        experienceVisible.includes(index) ? "translate-x-1" : ""
                      }`}
                      style={{ transitionDelay: `${lineIndex * 50}ms` }}
                    >
                      {line}
                      {lineIndex < item.description.split("\n").length - 1 && (
                        <br />
                      )}
                    </span>
                  ))}
                </p>

                {/* Animated progress bar */}
                <div
                  className={`h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-1000 delay-200 rounded-full ${
                    experienceVisible.includes(index) ? "w-full" : "w-0"
                  }`}
                ></div>
              </div>

              {/* Floating elements */}
              <div
                className={`absolute -top-2 -right-2 w-3 h-3 bg-blue-400/20 rounded-full transition-opacity duration-500 ${
                  experienceVisible.includes(index)
                    ? "opacity-100 animate-ping"
                    : "opacity-0"
                }`}
              ></div>
            </div>
          ))}
        </div>

        {/* Enhanced floating particles for experience section */}
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-20 delay-500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-teal-400 rounded-full animate-ping opacity-25 delay-1000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-ping opacity-60"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-500 rounded-full animate-pulse opacity-40"></div>
      <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-teal-500 rounded-full animate-bounce opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-1 h-1 bg-indigo-500 rounded-full animate-ping opacity-60"></div>
    </div>
  );
}
