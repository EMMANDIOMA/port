import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Pages = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const pageItems = [
    {
      id: 1,
      title: "Portfolio",
      description: "Showcase of my recent work",
      icon: (
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
          </svg>
        </div>
      ),
    },
    {
      id: 2,
      title: "Testimonials",
      description: "Client reviews and feedback",
      icon: (
        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
          <svg
            className="w-6 h-6 text-white"
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
    },
    {
      id: 3,
      title: "Resume",
      description: "Details about my career and skills",
      icon: (
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
          <svg
            className="w-6 h-6 text-white"
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
    },
    {
      id: 4,
      title: "Certifications",
      description: "Professional courses and achievements",
      icon: (
        <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
          <svg
            className="w-6 h-6 text-white"
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
    },
    {
      id: 5,
      title: "FAQ",
      description: "Answers to common questions",
      icon: (
        <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">FAQ</span>
        </div>
      ),
    },
    {
      id: 6,
      title: "Pricing",
      description: "My service rates and packages",
      icon: (
        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
          <svg
            className="w-6 h-6 text-white"
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
    },
  ];

  return (
    <>
      <header className="flex  bg-gray-900 justify-between items-center px-6 pt-3 h-[5vh]">
        <h1 className="text-white text-3xl font-serif">Emmanuel</h1>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            <FaBars />
          </button>
        </div>
        <div
          className={`gap-10 md:flex ${
            menuOpen
              ? "flex flex-col absolute top-[8vh] right-4 bg-gray-800 p-4 rounded z-10"
              : "hidden"
          }`}
        >
          <NavLink to={"/"} className="text-[grey]">
            Home
          </NavLink>
          <NavLink to={"/About"} className="text-[grey]">
            About
          </NavLink>
          <NavLink to={"/Pages"} className="text-[white]">
            Pages
          </NavLink>
          <NavLink to={"/Blog"} className="text-[grey]">
            Blog
          </NavLink>
          <NavLink to={"/Contact"} className="text-[grey]">
            Contact
          </NavLink>

          {/* <NavLink className="border flex items-center justify-center border-[grey] h-[5vh] w-[9vw]  text-center rounded-2xl">
                      <p>Hire me</p>
                      <p className="text-white md:pl-3   pt-[1]">
                        <AiOutlineForward />
                      </p>
                    </NavLink> */}
        </div>
      </header>
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="text-6xl font-bold mb-4">Pages</h1>
            <p className="text-xl text-gray-400">
              Browse the different pages in my portfolio.
            </p>
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pageItems.map((item) => (
              <div
                key={item.id}
                className="bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:bg-gray-750 transition-colors duration-200 cursor-pointer group"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pages;
