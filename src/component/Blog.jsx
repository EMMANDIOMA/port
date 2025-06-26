"use client";

import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaCalendarAlt, FaClock, FaTag } from "react-icons/fa";

const Blog = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [postsVisible, setPostsVisible] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const postsRef = useRef([]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Intersection Observer for blog posts
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.dataset.index);
            setPostsVisible((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    postsRef.current.forEach((post) => {
      if (post) observer.observe(post);
    });

    return () => observer.disconnect();
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "How I Became a Front-End Developer & Instructor",
      description: "Follow my journey into web development and teaching.",
      link: "",
      category: "Career",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      gradient: "from-purple-500/20 via-pink-500/20 to-purple-600/20",
    },
    {
      id: 2,
      title: "Understanding the Box Model in CSS (Made Simple)",
      description: "A beginner-friendly guide to mastering the CSS box model.",
      link: "",
      category: "Tutorial",
      date: "Dec 12, 2024",
      readTime: "8 min read",
      gradient: "from-blue-500/20 via-cyan-500/20 to-blue-600/20",
    },
    {
      id: 3,
      title: "What I Teach at Learn Factory: From HTML to React",
      description: "An overview of the front end skills I cover in my courses",
      link: "",
      category: "Education",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      gradient: "from-green-500/20 via-emerald-500/20 to-green-600/20",
    },
    {
      id: 4,
      title: "How I Stay Motivated as a Developer and Teacher",
      description:
        "My strategies for keeping passion alive in both coding and teaching",
      link: "",
      category: "Career",
      date: "Dec 8, 2024",
      readTime: "7 min read",
      gradient: "from-yellow-500/20 via-orange-500/20 to-yellow-600/20",
    },
    {
      id: 5,
      title: "Building My Portfolio: Step-by-Step",
      description:
        "A look into the process of designing and developing my portfolio site",
      link: "",
      category: "Tutorial",
      date: "Dec 5, 2024",
      readTime: "10 min read",
      gradient: "from-teal-500/20 via-cyan-500/20 to-teal-600/20",
    },
    {
      id: 6,
      title: "Frontend Development Trends to Watch",
      description:
        "Key trends and technologies shaping the future of front-end development",
      link: "",
      category: "Trends",
      date: "Dec 1, 2024",
      readTime: "12 min read",
      gradient: "from-indigo-500/20 via-purple-500/20 to-indigo-600/20",
    },
  ];

  const categories = ["All", "Career", "Tutorial", "Education", "Trends"];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Enhanced Navbar */}
      <header
        className={`flex bg-gray-900 justify-between items-center px-6 pt-3 h-[fit] relative z-50 transform transition-all duration-1000 ${
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
                item === "Blog" ? "text-white" : "text-gray-400"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item}
              {/* Unique underline animation for active page */}
              {item === "Blog" && (
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
                        item === "Blog"
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
                      {item === "Blog" && (
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

      <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-teal-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 p-8">
          {/* Enhanced Header Section */}
          <div className="mb-16 text-center">
            <div className="relative">
              <h1
                className={`text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 bg-clip-text text-transparent transform transition-all duration-1500 ${
                  isVisible
                    ? "translate-y-0 opacity-100 scale-100"
                    : "translate-y-12 opacity-0 scale-95"
                }`}
              >
                Blog
              </h1>
              {/* Animated underline */}
              <div
                className={`h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 rounded-full mx-auto transition-all duration-1500 delay-300 ${
                  isVisible ? "w-24 opacity-100" : "w-0 opacity-0"
                }`}
              ></div>
            </div>
            <p
              className={`text-xl md:text-2xl text-gray-400 mt-8 transform transition-all duration-1200 delay-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Read my latest articles
            </p>
          </div>

          {/* Enhanced Search and Filter Section */}
          <div
            className={`mb-12 transform transition-all duration-1000 delay-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            {/* Search Bar */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-96 mx-auto block p-4 pl-12 bg-gray-800 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:scale-105 transition-all duration-300"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-105 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                      : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white active:bg-gray-700 active:text-white"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Blog Posts Grid - Updated padding and gap */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-2 sm:px-0">
            {filteredPosts.map((post, index) => (
              <NavLink
                key={post.id}
                to={post.link}
                ref={(el) => (postsRef.current[index] = el)}
                data-index={index}
                className={`group block relative overflow-hidden bg-gray-800 border border-gray-700 rounded-3xl p-4 sm:p-6 md:p-8 transition-all duration-700 cursor-pointer transform ${
                  postsVisible.includes(index)
                    ? "-translate-y-4 scale-105 opacity-100"
                    : isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-16 opacity-0"
                }`}
                style={{
                  transitionDelay: `${900 + index * 150}ms`,
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {/* Animated background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    post.gradient
                  } transition-opacity duration-700 rounded-3xl ${
                    postsVisible.includes(index) ? "opacity-100" : "opacity-0"
                  }`}
                ></div>

                {/* Enhanced border glow effect */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-teal-500/20 transition-opacity duration-700 -z-10 blur-xl ${
                    postsVisible.includes(index) ? "opacity-100" : "opacity-0"
                  }`}
                ></div>

                {/* Content container */}
                <div className="relative z-10">
                  {/* Category and Meta Info - Updated for better responsive layout */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium w-fit">
                      <FaTag className="inline mr-1" />
                      {post.category}
                    </span>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-400 text-xs sm:text-sm">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt className="text-xs" />
                        <span className="truncate">{post.date}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock className="text-xs" />
                        <span className="truncate">{post.readTime}</span>
                      </span>
                    </div>
                  </div>

                  {/* Title with enhanced animation - Updated for better responsive text */}
                  <h3
                    className={`text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 transition-all duration-500 transform leading-tight ${
                      postsVisible.includes(index)
                        ? "text-white translate-x-2"
                        : ""
                    }`}
                  >
                    {post.title.split(" ").map((word, wordIndex) => (
                      <span
                        key={wordIndex}
                        className={`inline-block transition-transform duration-300`}
                        style={{
                          transitionDelay: `${wordIndex * 100}ms`,
                          transform: postsVisible.includes(index)
                            ? "translateY(-2px)"
                            : "translateY(0)",
                        }}
                      >
                        {word}{" "}
                      </span>
                    ))}
                  </h3>

                  {/* Description with enhanced animation - Updated for better responsive text */}
                  <p
                    className={`text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed transition-all duration-500 transform mb-4 sm:mb-6 ${
                      postsVisible.includes(index)
                        ? "text-gray-300 translate-x-2"
                        : ""
                    }`}
                  >
                    {post.description}
                  </p>

                  {/* Enhanced Read More Indicator */}
                  <div
                    className={`flex items-center text-blue-400 transition-all duration-500 transform ${
                      postsVisible.includes(index)
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-8"
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-semibold mr-2">
                      Read Article
                    </span>
                    <svg
                      className={`w-4 h-4 sm:w-5 sm:h-5 transform transition-transform duration-300 ${
                        postsVisible.includes(index) ? "translate-x-2" : ""
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
                      postsVisible.includes(index) ? "w-full" : "w-0"
                    }`}
                  ></div>
                </div>

                {/* Floating particles on hover */}
                <div
                  className={`absolute top-4 right-4 w-2 h-2 bg-blue-400/30 rounded-full transition-opacity duration-500 ${
                    postsVisible.includes(index)
                      ? "opacity-100 animate-ping"
                      : "opacity-0"
                  }`}
                ></div>
                <div
                  className={`absolute bottom-4 left-4 w-1 h-1 bg-purple-400/30 rounded-full transition-opacity duration-700 ${
                    postsVisible.includes(index)
                      ? "opacity-100 animate-pulse"
                      : "opacity-0"
                  }`}
                ></div>
              </NavLink>
            ))}
          </div>

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold mb-2">No articles found</h3>
              <p className="text-gray-400">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}

          {/* Enhanced floating animation elements */}
          <div className="fixed top-20 left-10 w-3 h-3 bg-blue-500 rounded-full animate-pulse opacity-40"></div>
          <div className="fixed top-40 right-20 w-2 h-2 bg-purple-500 rounded-full animate-ping opacity-30"></div>
          <div className="fixed bottom-32 left-20 w-2 h-2 bg-teal-500 rounded-full animate-bounce opacity-35"></div>
          <div className="fixed bottom-20 right-10 w-1 h-1 bg-pink-500 rounded-full animate-pulse opacity-40"></div>
          <div className="fixed top-1/2 left-5 w-1 h-1 bg-yellow-500 rounded-full animate-ping opacity-25"></div>
          <div className="fixed top-3/4 right-5 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce opacity-30"></div>
        </div>
      </div>
    </>
  );
};

export default Blog;
