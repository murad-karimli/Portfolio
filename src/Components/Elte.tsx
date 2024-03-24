import React from "react";
import { Element } from "react-scroll";
import elte from "../img/elte.jpg";

function Stipendium() {
  return (
    <Element
      name="about"
      className="flex  md:flex-row h-auto flex-col w-[95%] sm:w-[80%] opacity-60 p-8 mx-auto my-32 rounded-2xl bg-[#4348]  lg:h-[500px] bg-center bg-cover"
    >
      <div className="md:w-[75%]  relative w-[100%] m-auto jusify-center items-center">
        <p className=" text-2xl text-center sm:text-3xl sm:mx-4 mb-4 sm:p-2 text-[#fff] font-poppins">
          Computer science at ELTE!
        </p>
        <p className="text-xl sm:text-2xl mx-4 p-2 text-[#fff] font-barlow">
          As a Computer Science Bachelor's student at Eötvös Loránd University
          (ELTE) and a recipient of the Stipendium Hungaricum 2023 scholarship,
          I am honored to be part of this esteemed program facilitated by the
          governments of Hungary and Azerbaijan. This scholarship signifies the
          strong partnership between our nations and provides me with invaluable
          opportunities for academic and personal development.
        </p>
      </div>
      <div className=" w-[100%] md:w-[70%] right-0 items-end justify-end flex my-2">
        <img
          className="rounded-3xl w-full h-full shadow-sm right-[29%] shadow-[#ffe]"
          alt="academy.jpg"
          src={elte}
        />
      </div>
    </Element>
  );
}

export default Stipendium;
