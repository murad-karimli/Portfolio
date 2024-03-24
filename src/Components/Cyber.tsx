import React from "react";
import { Element } from "react-scroll";
import academy from "../img/academy.jpg";

function Cyber() {
  return (
    <Element
      name="about"
      className="flex  md:flex-row h-auto flex-col w-[95%] sm:w-[80%] opacity-60 p-8 mx-auto my-32 rounded-2xl bg-[#4348]  lg:h-[500px] bg-center bg-cover"
    >
      <div className=" w-[100%] md:w-[70%] right-0 items-end justify-end flex my-2">
        <img
          className="rounded-3xl w-full h-full shadow-sm right-[29%] shadow-[#ffe]"
          alt="academy.jpg"
          src={academy}
        />
      </div>
      <div className="md:w-[75%]  relative w-[100%] m-auto jusify-center items-center">
        <p className=" text-2xl text-center sm:text-3xl sm:mx-4 mb-4 sm:p-2 text-[#fff] font-poppins">
          Cybersecurity journey!
        </p>
        <p className="text-xl sm:text-2xl mx-4 p-2 text-[#fff] font-barlow">
          As part of the joint program between Azerbaijan Cybersecurity Center
          and Technion University in blue team cybersecurity, I actively
          participated in workshops and lectures. The program aimed to
          strengthen collaboration and enhance defensive strategies against
          cyber threats, contributing to the cybersecurity capabilities of
          Azerbaijan.
        </p>
      </div>
    </Element>
  );
}

export default Cyber;
