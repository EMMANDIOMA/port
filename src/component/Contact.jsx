import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Contact = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yh5lqf2", // ✅ Your service ID
        "template_pi47np8", // ✅ Your template ID
        form.current,
        "oUOLDAWexciQbPsJ4" // ✅ Your public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message, try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <section className="bg-gray-800  text-white" id="contact">
      {/* 🧭 HEADER SECTION */}
      <header className="flex  justify-between items-center px-6  py-8 h-[5vh]">
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
          <NavLink className="text-[grey]">Pages</NavLink>
          <NavLink className="text-[grey]">Blog</NavLink>
          <NavLink to={"/Contact"} className="text-white">
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

      {/* 📬 CONTACT CONTENT */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Contact Me</h2>
        <p className="text-[#6c6d6e] mt-2">Let’s get in touch</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-16 px-4 md:px-24">
        <div className="space-y-6">
          <a
            href="mailto:ofojuochidera@gmail.com"
            className="flex items-center gap-4"
          >
            <FaEnvelope className="text-xl text-[#00df9a]" />
            <span className="text-lg">ofojuochidera@gmail.com</span>
          </a>
          <a
            href="https://wa.me/2347026908248"
            className="flex items-center gap-4"
          >
            <FaPhoneAlt className="text-xl text-[#00df9a]" />
            <span className="text-lg">+234 702 690 8248</span>
          </a>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-xl text-[#00df9a]" />
            <span className="text-lg">Umuahia, Abia State, Nigeria</span>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray-700 p-8 rounded-xl w-full md:w-1/2 space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-[#00df9a] text-black font-semibold py-3 px-6 rounded-full hover:bg-[#00c487] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
