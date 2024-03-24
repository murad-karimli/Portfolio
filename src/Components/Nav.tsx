// import { AiOutlineClose } from "react-icons/ai";
// import { FaAlignJustify } from "react-icons/fa";
import { Link } from 'react-scroll';
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
function Nav() {
  const [nav, setNav] = useState(false);
  const navHandler = () => {
    setNav(!nav);
  };
  return (
    <nav className="flex  justify-between  py-4 px-2 ">
      <h1 className="inline-block text-6xl font-indie text-white ">K.M</h1>

      {/* for desktop */}
      <div className=" md:block hidden  absolute text-white right-8 ">
        <Link
         to="header" 
         smooth={true}
         duration={900}
          className="transition duration-300 ease-in mx-8 hover:text-gray-500 hover:opacity-70   hover:border-y-2  py-4 text-xl font-poppins"
        >
          Home
        </Link>
        <Link
        to="about"
          smooth={true}
          duration={900}
        className="transition duration-300 ease-in mx-8 hover:text-gray-500 hover:opacity-70   hover:border-y-2  py-4 text-xl font-poppins"
        >
          About me
        </Link>
        <Link
        to="tech"
          smooth={true}
          duration={900}
        className="transition duration-300 ease-in mx-8 hover:text-gray-500 hover:opacity-70   hover:border-y-2  py-4 text-xl font-poppins"
        >
          Experience
        </Link>
        <Link
        to="projects"
          smooth={true}
          duration={900}
        className="transition duration-300 ease-in mx-8 hover:text-gray-500 hover:opacity-70   hover:border-y-2  py-4 text-xl font-poppins"
        >
          Project
        </Link>
        <Link
        to="resume"
          smooth={true}
          duration={900}
        className="transition duration-300 ease-in mx-8 hover:text-gray-500 hover:opacity-70   hover:border-y-2  py-4 text-xl font-poppins"
        >
          Resume
        </Link>
        <Link
        to="contact"
          smooth={true}
          duration={900}
        className="transition duration-300 ease-in mx-8 hover:text-gray-500 hover:opacity-70   hover:border-y-2  py-4 text-xl font-poppins"
        >
          Contact
        </Link>
      </div>

      {/* for mobile */}
      <div
        className={
          nav
            ? "text-white transition-all duration-300 overflow-hidden z-10 fixed bg-[#0a192f] flex h-full w-full flex-col justify-center items-center"
            : "hidden"
        }
      >
        
        <IoMdClose size={20}
          className="absolute  top-[2%] m-4 right-[5%] font-poppins"
          onClick={navHandler}/>
        <Link
          onClick={navHandler}
        to="header"
          smooth={true}
          duration={900}
          className="hover:text-gray-900 hover:opacity-70   py-8 text-xl font-poppins"
        >
          Home
        </Link>
        <Link
          onClick={navHandler}
        to="about"
          smooth={true}
          duration={900}
          className=" m-8 hover:text-gray-900 hover:opacity-70 py-8 text-xl font-poppins"
        >
          About me
        </Link>
        <Link
          onClick={navHandler}
        to="tech"
          smooth={true}
          duration={900}
          className=" hover:text-gray-900 hover:opacity-70 py-8 text-xl font-poppins"
        >
          Experience
        </Link>
        <Link
          onClick={navHandler}
        to="work"
          smooth={true}
          duration={900}
          className="hover:text-gray-900 hover:opacity-70 py-8 text-xl font-poppins"
        >
          Work
        </Link>
        <Link
        to="resume"
          smooth={true}
          duration={900}
          className="hover:text-gray-900 hover:opacity-70 py-8 text-xl font-poppins"
        >
          Resume
        </Link>
        <Link
          onClick={navHandler}
        to="contact"
          smooth={true}
          duration={900}
          className=" m-8 hover:text-gray-900 hover:opacity-70 py-8 text-xl font-poppins"
        >
          Contact
        </Link>
      </div>

      {/* hamburger */}
      <div>
      <RxHamburgerMenu size={20} className='md:hidden z-12 fill-zinc-50 bg-white' onClick={navHandler}/>
      </div>
    </nav>
  );
}
export default Nav;
