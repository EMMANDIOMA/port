import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Pages = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <>
      <main className=" bg-gray-800 h-[40vh]">
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
            <NavLink to={"/About"} className="text-[grey]">
              About
            </NavLink>
            <NavLink to={"/Pages"} className="text-[grey]">
              Pages
            </NavLink>
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
      </main>
    </>
  );
};

export default Pages;
