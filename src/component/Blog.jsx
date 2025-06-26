import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Blog = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "How I Became a Front-End Developer & Instructor",
      description: "Follow my journey into web development and teaching.",
      link: "/blog/frontend-developer-journey", // You can replace these with your actual links
    },
    {
      id: 2,
      title: "Understanding the Box Model in CSS (Made Simple)",
      description: "A beginner-friendly guide to mastering the CSS box model.",
      link: "/blog/css-box-model-guide",
    },
    {
      id: 3,
      title: "What I Teach at Learn Factory: From HTML to React",
      description: "An overview of the front end skills I cover in my courses",
      link: "/blog/learn-factory-curriculum",
    },
    {
      id: 4,
      title: "How I Stay Motivated as a Developer and Teacher",
      description:
        "My strategies for keeping passion alive in both coding and teaching",
      link: "/blog/staying-motivated-developer",
    },
    {
      id: 5,
      title: "Building My Portfolio: Step-by-Step",
      description:
        "A look into the process of designing and developing my portfolio site",
      link: "/blog/building-portfolio-guide",
    },
    {
      id: 6,
      title: "Frontend Development Trends to Watch",
      description:
        "Key trends and technologies shaping the future of front-end development",
      link: "/blog/frontend-trends-2024",
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
          <NavLink to={"/Pages"} className="text-[grey]">
            Pages
          </NavLink>
          <NavLink to={"/Blog"} className="text-[white]">
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
      <div className="min-h-screen bg-gray-900 text-white p-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Header Section with Animation */}
          <div className="mb-12 text-center">
            <h1
              className={`text-6xl font-bold mb-4 transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Blog
            </h1>
            <p
              className={`text-xl text-gray-400 transform transition-all duration-1000 delay-200 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Read my latest articles
            </p>
          </div>

          {/* Animated Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post, index) => (
              <NavLink
                key={post.id}
                to={post.link}
                className={`block bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:bg-gray-750 hover:border-gray-600 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 cursor-pointer group hover:-translate-y-2 hover:scale-105 transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{
                  transitionDelay: `${400 + index * 150}ms`,
                }}
              >
                {/* Blog Post Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed transition-all duration-300 group-hover:text-gray-300 transform group-hover:translate-x-1">
                    {post.description}
                  </p>

                  {/* Read More Indicator */}
                  <div className="mt-6 flex items-center text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <span className="text-sm font-medium">Read More</span>
                    <svg
                      className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
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
                  </div>

                  {/* Animated border glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                </div>

                {/* Hover overlay effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </NavLink>
            ))}
          </div>

          {/* Floating animation elements */}
          <div className="fixed top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse opacity-60"></div>
          <div className="fixed top-40 right-20 w-1 h-1 bg-purple-500 rounded-full animate-ping opacity-40"></div>
          <div className="fixed bottom-32 left-20 w-1.5 h-1.5 bg-teal-500 rounded-full animate-bounce opacity-50"></div>
          <div className="fixed bottom-20 right-10 w-1 h-1 bg-indigo-500 rounded-full animate-pulse opacity-60"></div>

          {/* Subtle background pattern */}
          <div className="fixed inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
