import React from "react";
import myCV from '../img/cv.png';
import { Element } from 'react-scroll';



function Resume() {
  
  
  return (
    <Element 
      name="resume" 
      className="mx-auto justify-center items-center md:p-20 flex flex-col lg:flex-row bg-[#4446] md:w-[80%] w-[98%] rounded-2xl h-[60%]"
    >
      <div className="sm:w-[40%] h-[50%] py-4 w-[90%]">
        <img
          src={myCV}
          style={{ cursor: 'pointer', width: '100%', height: 'auto' }} 
        />
      </div>
      <div className="flex justify-center items-center p-2 my-4 lg:p-36 w-[60%] font-barlow text-[#fffe] font-semibold text-xl md:text-3xl">
        <p className="">
          I have skills about creating responsive and functional Web-sites. I am always working on myself to improve my abilities.
          I am always eager to develop myself and learn new technologies about Web programming.
        </p>
      </div>
    </Element>
  );
}

export default Resume;
