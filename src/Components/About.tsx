import React from "react";
import code from "../img/code.jpg";
import {Element} from 'react-scroll'
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

function About() {
  return (
    <Element
      name="about"
      className="flex  md:flex-row h-auto flex-col w-[95%] sm:w-[80%] opacity-60 p-8 mx-auto my-32 rounded-2xl bg-[#4348]  lg:h-[500px] bg-center bg-cover"
    >
      <div className="md:w-[75%]  relative w-[100%] m-auto jusify-center items-center">
        <p className=" text-2xl text-center sm:text-3xl sm:mx-4 mb-4 sm:p-2 text-[#fff] font-poppins">
          Hi! My name is Murad.
        </p>
        <p className="text-xl sm:text-2xl mx-4 p-2 text-[#fff] font-barlow">
          I'm a passionate Computer science student at Eötvös Loránd University. I am
          learning web development & cybersecurity. And I have knowledge and skills about
          creating responsive and functional web-sites and protect them.
        </p>
      </div>
      <div className=" w-[100%] md:w-[70%] right-0 items-end justify-end flex my-2">
        <img
          className="rounded-3xl w-full h-full shadow-sm right-[29%] shadow-[#ffe]"
          alt='code.jpg'
          src={code} 
        />
      </div>
    </Element>
  );
}

export default About;
