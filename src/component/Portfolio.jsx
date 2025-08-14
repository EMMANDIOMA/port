"use client";

import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaExternalLinkAlt, FaGithub, FaEye } from "react-icons/fa";

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const projectsRef = useRef([]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Intersection Observer for projects
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.dataset.index);
            setProjectsVisible((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    projectsRef.current.forEach((project) => {
      if (project) observer.observe(project);
    });

    return () => observer.disconnect();
  }, []);

  // Portfolio projects data - Add your assignment link here
  const projects = [
    {
      id: 1,
      title: "Student Assignment Project",
      description:
        "A comprehensive web application built for a student client featuring modern design and functionality.",
      category: "Client Work",
      technologies: ["React", "JavaScript", "Tailwind CSS", "HTML"],
      liveUrl: "https://assignment-kohl-two.vercel.app/", // Add your assignment link here
      githubUrl: "https://github.com/EMMANDIOMA/new",
      image: "/screenshot.png",
      featured: true,
      gradient: "from-purple-500/20 via-pink-500/20 to-purple-600/20",
    },
    {
      id: 2,
      title: "Fintech Website",
      description: "ideas turning into reality",
      category: "Personal",
      technologies: ["React", "", "Tailwind CSS", "JavaScript"],
      liveUrl: "https://koinstack.vercel.app/",
      githubUrl: "https://github.com/EMMANDIOMA/koinstack",
      image: "",
      featured: false,
      gradient: "from-blue-500/20 via-cyan-500/20 to-blue-600/20",
    },
    {
      id: 3,
      title: "E-commerce Landing Page",
      description:
        "Modern e-commerce landing page with product showcase and interactive elements.",
      category: "Client Work",
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind"],
      liveUrl: "",
      githubUrl: "",
      image: "/ecommerce-landing-page.png",
      featured: false,
      gradient: "from-green-500/20 via-emerald-500/20 to-green-600/20",
    },
    {
      id: 4,
      title: "Learning Management System",
      description:
        "Educational platform for online courses with user authentication and progress tracking.",
      category: "Educational",
      technologies: ["React", "Node.js", "JavaScript", "CSS"],
      liveUrl: "",
      githubUrl: "",
      image: "/learning-management-system.png",
      featured: true,
      gradient: "from-yellow-500/20 via-orange-500/20 to-yellow-600/20",
    },
    {
      id: 5,
      title: "Restaurant Website",
      description:
        "Elegant restaurant website with menu display, reservation system, and contact information.",
      category: "Client Work",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      liveUrl: "",
      githubUrl: "",
      image: "/restaurant-website-design.png",
      featured: false,
      gradient: "from-teal-500/20 via-cyan-500/20 to-teal-600/20",
    },
    {
      id: 6,
      title: "Task Management App",
      description:
        "Productivity app for managing tasks and projects with drag-and-drop functionality.",
      category: "Personal",
      technologies: ["React", "JavaScript", "Tailwind CSS", "HTML"],
      liveUrl: "",
      githubUrl: "",
      image: "/task-management-app.png",
      featured: false,
      gradient: "from-indigo-500/20 via-purple-500/20 to-indigo-600/20",
    },
  ];

  const categories = ["All", "Client Work", "Personal", "Educational"];

  const filteredProjects = projects.filter((project) => {
    return selectedCategory === "All" || project.category === selectedCategory;
  });

  return (
    <>
      {/* Enhanced Navbar */}
      <header
        className={`flex bg-gray-900 justify-between items-center px-6 pt-3 h-[5vh] relative z-50 transform transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
        }`}
      >
        <h1 className="text-white text-3xl font-bold tracking-wide hover:text-purple-400 transition-colors duration-300 cursor-pointer">
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
              className={`transition-all duration-300 hover:text-purple-400 hover:scale-105 transform relative group font-medium tracking-wide ${
                item === "Portfolio" ? "text-white" : "text-gray-400"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item}
              {/* Unique underline animation for active page */}
              {item === "Portfolio" && (
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
                <h3 className="text-white font-bold text-lg tracking-wide">
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
                      className={`group relative transition-all duration-400 hover:text-purple-400 transform py-4 px-6 rounded-xl text-center overflow-hidden font-medium tracking-wide ${
                        item === "Portfolio"
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
                        <span className="font-semibold group-hover:translate-x-1 transition-transform duration-300">
                          {item}
                        </span>
                      </div>

                      {/* Unique active indicator */}
                      {item === "Portfolio" && (
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
              <div className="absolute bottom-2 left-2 w-1 h-1 bg-pink-400/50 rounded-full animate-ping"></div>
            </div>
          </>
        )}
      </header>

      <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-teal-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 p-8">
          {/* Enhanced Header Section */}
          <div className="mb-16 text-center">
            <div className="relative">
              <h1
                className={`text-7xl md:text-8xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-teal-400 bg-clip-text text-transparent transform transition-all duration-1500 tracking-tight ${
                  isVisible
                    ? "translate-y-0 opacity-100 scale-100"
                    : "translate-y-12 opacity-0 scale-95"
                }`}
              >
                Portfolio
              </h1>
              {/* Animated underline */}
              <div
                className={`h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-teal-400 rounded-full mx-auto transition-all duration-1500 delay-300 ${
                  isVisible ? "w-32 opacity-100" : "w-0 opacity-0"
                }`}
              ></div>
            </div>
            <p
              className={`text-xl md:text-2xl text-gray-400 mt-8 transform transition-all duration-1200 delay-500 font-light tracking-wide leading-relaxed ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Showcasing my recent works and projects
            </p>
          </div>

          {/* Enhanced Category Filter */}
          <div
            className={`mb-12 transform transition-all duration-1000 delay-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-105 font-semibold tracking-wide text-sm md:text-base ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30"
                      : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white active:bg-gray-700 active:text-white border border-gray-700 hover:border-gray-600"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => (projectsRef.current[index] = el)}
                data-index={index}
                className={`group relative overflow-hidden bg-gray-800 border border-gray-700 rounded-3xl transition-all duration-700 cursor-pointer transform ${
                  projectsVisible.includes(index)
                    ? "-translate-y-4 scale-105 opacity-100"
                    : isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-16 opacity-0"
                } ${project.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
                style={{
                  transitionDelay: `${900 + index * 150}ms`,
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {/* Animated background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    project.gradient
                  } transition-opacity duration-700 rounded-3xl ${
                    projectsVisible.includes(index)
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                ></div>

                {/* Enhanced border glow effect */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-teal-500/20 transition-opacity duration-700 -z-10 blur-xl ${
                    projectsVisible.includes(index)
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                ></div>

                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-3xl">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className={`w-full h-48 md:h-56 object-cover transition-all duration-500 transform ${
                      projectsVisible.includes(index)
                        ? "scale-110"
                        : "scale-100"
                    }`}
                  />

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                      Featured
                    </div>
                  )}

                  {/* Overlay with action buttons */}
                  <div
                    className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                      projectsVisible.includes(index)
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                      >
                        <FaExternalLinkAlt className="text-white text-lg" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                      >
                        <FaGithub className="text-white text-lg" />
                      </a>
                    )}
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                      <FaEye className="text-white text-lg" />
                    </button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 relative z-10">
                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-semibold mb-3 tracking-wide">
                    {project.category}
                  </span>

                  {/* Title with enhanced animation */}
                  <h3
                    className={`text-xl md:text-2xl font-bold mb-3 transition-all duration-500 transform leading-tight tracking-wide ${
                      projectsVisible.includes(index)
                        ? "text-white translate-x-2"
                        : ""
                    }`}
                  >
                    {project.title.split(" ").map((word, wordIndex) => (
                      <span
                        key={wordIndex}
                        className="inline-block transition-transform duration-300"
                        style={{
                          transitionDelay: `${wordIndex * 100}ms`,
                          transform: projectsVisible.includes(index)
                            ? "translateY(-2px)"
                            : "translateY(0)",
                        }}
                      >
                        {word}{" "}
                      </span>
                    ))}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-gray-400 text-sm md:text-base leading-relaxed mb-4 transition-all duration-500 transform font-light tracking-wide ${
                      projectsVisible.includes(index)
                        ? "text-gray-300 translate-x-2"
                        : ""
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs transition-all duration-300 transform font-medium tracking-wide ${
                          projectsVisible.includes(index)
                            ? "bg-gray-600 text-white scale-105"
                            : ""
                        }`}
                        style={{ transitionDelay: `${techIndex * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link - Now Clickable */}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center text-purple-400 transition-all duration-500 transform hover:text-purple-300 cursor-pointer group ${
                        projectsVisible.includes(index)
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-8"
                      }`}
                    >
                      <span className="text-sm font-bold mr-2 tracking-wide group-hover:underline">
                        View Project
                      </span>
                      <svg
                        className={`w-4 h-4 transform transition-transform duration-300 group-hover:scale-110 ${
                          projectsVisible.includes(index) ? "translate-x-2" : ""
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
                    </a>
                  ) : (
                    <div
                      className={`flex items-center text-gray-500 transition-all duration-500 transform ${
                        projectsVisible.includes(index)
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-8"
                      }`}
                    >
                      <span className="text-sm font-bold mr-2 tracking-wide">
                        Coming Soon
                      </span>
                      <svg
                        className={`w-4 h-4 transform transition-transform duration-300 ${
                          projectsVisible.includes(index) ? "translate-x-2" : ""
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
                  )}

                  {/* Animated progress bar */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-teal-400 rounded-full transition-all duration-700 ${
                      projectsVisible.includes(index) ? "w-full" : "w-0"
                    }`}
                  ></div>
                </div>

                {/* Floating particles */}
                <div
                  className={`absolute top-4 right-4 w-2 h-2 bg-purple-400/30 rounded-full transition-opacity duration-500 ${
                    projectsVisible.includes(index)
                      ? "opacity-100 animate-ping"
                      : "opacity-0"
                  }`}
                ></div>
                <div
                  className={`absolute bottom-4 left-4 w-1 h-1 bg-pink-400/30 rounded-full transition-opacity duration-700 ${
                    projectsVisible.includes(index)
                      ? "opacity-100 animate-pulse"
                      : "opacity-0"
                  }`}
                ></div>
              </div>
            ))}
          </div>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">💼</div>
              <h3 className="text-2xl font-bold mb-2 tracking-wide">
                No projects found
              </h3>
              <p className="text-gray-400 font-light tracking-wide">
                Try selecting a different category
              </p>
            </div>
          )}

          {/* Enhanced floating animation elements */}
          <div className="fixed top-20 left-10 w-3 h-3 bg-purple-500 rounded-full animate-pulse opacity-40"></div>
          <div className="fixed top-40 right-20 w-2 h-2 bg-pink-500 rounded-full animate-pulse opacity-30"></div>
          <div className="fixed bottom-32 left-20 w-2 h-2 bg-teal-500 rounded-full animate-bounce opacity-35"></div>
          <div className="fixed bottom-20 right-10 w-1 h-1 bg-purple-500 rounded-full animate-pulse opacity-40"></div>
          <div className="fixed top-1/2 left-5 w-1 h-1 bg-pink-500 rounded-full animate-pulse opacity-25"></div>
          <div className="fixed top-3/4 right-5 w-1.5 h-1.5 bg-teal-500 rounded-full animate-bounce opacity-30"></div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
