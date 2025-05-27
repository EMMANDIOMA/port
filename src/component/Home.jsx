import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineForward } from "react-icons/ai";
import { FaGripLinesVertical, FaBars } from "react-icons/fa6";
import { FaDev } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <main className="  bg-gray-800">
        <section className="">
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
              <NavLink to={"/"} className="text-white">
                Home
              </NavLink>
              <NavLink to={"/About"} className="text-[grey]">
                About
              </NavLink>
              <NavLink className="text-[grey]">Pages</NavLink>
              <NavLink className="text-[grey]">Blog</NavLink>
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

          <section className="  ">
            <div className="md:flex md:justify-center flex flex-col items-center py-6 h-[70vh] gap-[10px]">
              <div className="text-white flex-col justify-center items-center flex">
                <h1>Hello i'm </h1>
                <h1 className="font-serif pl-5">CHIDERA OFOJUO </h1>
              </div>
              <div className="">
                <img className="h-[50vh]" src="./chidera.png" alt="" />
              </div>
            </div>
          </section>
        </section>
      </main>

      <section className="bg-gray-700 md:h-[fit]   gap-[10px] flex flex-col  h-[fit]">
        <div className="flex text-[grey] pt-7 pl-[5px] md:pl-[350px] md:flex md:items  items-center">
          <div>
            <FaGripLinesVertical />
          </div>
          <p>My Service</p>
        </div>
        <div className="pl-[5px] md:pl-[350px] text-2xl text-[white] font-serif pb-6">
          <p>Service provide for my clients.</p>
        </div>

        <section className="flex items-center md:justify-center pb-6 flex-col md:flex md:flex-row  gap-3">
          <div className="h-[35vh] pl-5 pt-3 flex w-[50%] md:w-[15vw] md:h-[45vh]  bg-[#252734]">
            <div className="text-white flex flex-col gap-[9px]">
              <p className="text-2xl">
                <FaDev />
              </p>
              <p>Development skills</p>
              <div className="flex items-center text-[grey] gap-2">
                <p>
                  <MdKeyboardDoubleArrowRight />
                </p>{" "}
                Html/Css
              </div>
              <div className="flex items-center text-[grey] gap-2">
                <p>
                  <MdKeyboardDoubleArrowRight />
                </p>{" "}
                Tailwind
              </div>
              <div className="flex items-center text-[grey] gap-2">
                <p>
                  <MdKeyboardDoubleArrowRight />
                </p>{" "}
                Javascript
              </div>
              <div className="flex items-center text-[grey] gap-2">
                <p>
                  <MdKeyboardDoubleArrowRight />
                </p>{" "}
                React
              </div>
              <div className="flex items-center text-[grey] gap-2">
                <p>
                  <MdKeyboardDoubleArrowRight />
                </p>{" "}
                Next.js
              </div>
            </div>
          </div>

          <div className="h-[35vh] pl-5 pt-3 flex w-[50%] md:w-[15vw] md:h-[45vh]  bg-[#252734]">
            <div className="text-white flex flex-col gap-[9px]">
              <p className="text-2xl">
                <FaDev />
              </p>
              <p>services</p>
              <div className="flex items-center text-[grey] gap-2">
                <p>
                  <MdKeyboardDoubleArrowRight />
                </p>{" "}
                Landing pages
              </div>
              <div className="flex items-center text-[grey] gap-2">
                <p>
                  <MdKeyboardDoubleArrowRight />
                </p>{" "}
                create webpages
              </div>
              <div className="flex items-center text-[grey] gap-2">
                <p>
                  <MdKeyboardDoubleArrowRight />
                </p>{" "}
                build your portfolio
              </div>
              <div className="flex items-center text-[grey] gap-2">
                <p>
                  <MdKeyboardDoubleArrowRight />
                </p>{" "}
                handle your sites
              </div>
              <div className="flex items-center text-[grey] gap-2">
                <p>
                  <MdKeyboardDoubleArrowRight />
                </p>{" "}
                create websites
              </div>
            </div>
          </div>

          <div className="h-[35vh] pl-5 pt-3 flex w-[50%] md:w-[15vw] md:h-[45vh]   bg-[#252734]">
            <div className="text-white flex flex-col gap-[9px]">
              <p className="text-2xl">
                <FaDev />
              </p>
              <p>Teaching</p>
              <div className="flex items-center text-[grey] gap-2">
                <p>
                  <MdKeyboardDoubleArrowRight />
                </p>{" "}
                teach Html/css
              </div>
              <div className="flex items-center text-[grey] gap-2">
                <p>
                  <MdKeyboardDoubleArrowRight />
                </p>{" "}
                teach Tailwind
              </div>
              <div className="flex items-center text-[grey] gap-2">
                <p>
                  <MdKeyboardDoubleArrowRight />
                </p>{" "}
                Javascript instructor
              </div>
              <div className="flex items-center text-[grey] gap-2">
                <p>
                  <MdKeyboardDoubleArrowRight />
                </p>{" "}
                React instructor
              </div>
              <div className="flex items-center text-[grey] gap-2">
                <p>
                  <MdKeyboardDoubleArrowRight />
                </p>{" "}
                Next instructor
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
