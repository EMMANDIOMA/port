import { BsPlayCircle, BsArrows, BsAlignEnd } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { FaGripLinesVertical, FaBars } from "react-icons/fa6";
import React, { useState } from "react";

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <div className="bg-gray-800 py-0 px-0 m-0 text-white">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 pt-3 h-[5vh]">
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
          <NavLink to={"/About"} className="text-[white]">
            About
          </NavLink>
          <NavLink to={"/Pages"} className="text-[grey]">Pages</NavLink>
          <NavLink to={"/Blog"} className="text-[grey]">Blog</NavLink>
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

      {/* About Header */}
      <div className="flex flex-col gap-5 justify-center items-center pt-[80px]">
        <h1 className="text-6xl">About Me</h1>
        <div className="border border-[#00000036] bg-gray-700 flex gap-2 justify-around md:w-[10vw] text-center rounded-lg py-2">
          <p className="text-[#6c6d6e] border-r-2 px-2">About</p>
          <p className="pr-3">About</p>
        </div>
      </div>

      {/* About Details */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-[100px] bg-gray-700 px-4 py-10">
        <div className="bg-gray-800 shadow-md shadow-black w-full md:w-[15vw] h-[35vh] flex flex-col gap-9 items-center justify-around">
          <BsPlayCircle size={40} />
          <button className="border md:w-[10vw] px-[13px] py-[5px] md:py-[10px] rounded-full">
            Read More
          </button>
        </div>
        <div className="flex flex-col gap-5 text-center md:text-left">
          <h1 className="text-3xl">I'm Ofojuo Chidera</h1>
          <p className="text-2xl text-[#6c6d6e]">
            JavaScript Instructor <br /> Front-end Developer
          </p>
          <p className="text-[#6c6d6e]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Quos assumenda aliquam ut cum maiores saepe velit, soluta ipsam
            omnis ratione modi.
          </p>
        </div>
      </div>

      {/* Education / Experience Section */}
      <div className="bg-gray-800 py-12">
        <div className="flex md:gap-[40px] gap-[20px] justify-center text-2xl">
          <div className="md:w-[15vw] text-center py-2 bg-gray-700">
            Experience
          </div>
          <p className="md:mt-1 mt-2">Education</p>
        </div>

        <div className="flex flex-col gap-10 text-white px-4 md:pl-[36%] mt-10">
          {[1, 2, 3].map((item, index) => (
            <div
              key={index}
              className="flex gap-[30px] items-start justify-center"
            >
              <div className="flex flex-col gap-1">
                <BsArrows />
                <BsAlignEnd />
              </div>
              <div className="flex flex-col gap-3">
                {index === 0 && (
                  <>
                    <h1 className="text-2xl mt-2">
                      Student of Night code class
                    </h1>
                    <p className="text-[#6c6d6e]">startup class of tech</p>
                    <p className="text-[#6c6d6e]">
                      I started from scratch at Night Code Class.
                      <br />
                      Now I build websites with React and Next.js.
                      <br />
                      From HTML to APIs — I learned it all.
                      <br />
                      Real projects, real skills. Now I teach others too. Night
                      Code Class changed my story.
                    </p>
                  </>
                )}
                {index === 1 && (
                  <>
                    <h1 className="text-2xl">Student of Learnfactory nig</h1>
                    <p className="text-[#6c6d6e]">Mastering skills</p>
                    <p className="text-[#6c6d6e]">
                      I came to LearnFactory ready to grow.
                      <br />
                      Each day brought real code and new challenges.
                      <br />
                      From HTML to React — I built it all.
                      <br />I learned to teach, lead, and grow fast. The
                      <br />
                      pressure was real, but so was the growth. LearnFactory
                      shaped me into a true developer.
                    </p>
                  </>
                )}
                {index === 2 && (
                  <>
                    <h1 className="text-2xl">Javascript Instructor</h1>
                    <p className="text-[#6c6d6e]">Building Teams of Dev</p>
                    <p className="text-[#6c6d6e]">
                      actually Teaching made me a better developer.
                      <br />I shared knowledge, solved problems, and grew daily.
                      Watching students level up was
                      <br /> the real reward. This journey deepened both my
                      skills and purpose.
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
