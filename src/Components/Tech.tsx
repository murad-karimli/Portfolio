import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { Element } from "react-scroll";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaGithubSquare } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";

function Tech() {
  return (
    <Element
      name="tech"
      className="flex flex-col justify-center items-center font-mono w-full py-24 "
    >
      <h1 className="text-4xl text-[#fff] text-center font-bold p-8 font-poppins">
        I am working with:
      </h1>
      <div className="lg:flex mb-4 justify-between w-[60%] lg:w-[60%]">
        <a
          href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
          rel="noreferrer"
          target="_blank"
        >
          <div className="shadow-lg p-8 rounded-xl shadow-[#a34102] bg-[#0a192b] mb-4 animate-[wiggle_3s_ease-in-out_infinite]  hover:scale-110 transition-all duration-500">
          
              <FaHtml5 className="fill-[#a34100]" size={100}/>
            
            <h1 className="text-xl text-[#ffff] text-center font-semibold font-mono">
              HTML5
            </h1>
          </div>
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          rel="noreferrer"
          target="_blank"
        >
          <div className="shadow-lg p-8 rounded-xl shadow-[#26abfe] bg-[#0a192b] mb-4 animate-[rewiggle_3s_ease-in-out_infinite] hover:scale-110 transition-all duration-500">
            <IoLogoCss3 className="fill-[#26abff]" size={100}/>
              
            <h1 className="text-xl text-[#ffff] text-center font-semibold font-mono">
              CSS3
            </h1>
          </div>
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          rel="noreferrer"
          target="_blank"
        >
          <div className="shadow-lg p-8 rounded-xl shadow-[#ff1] bg-[#0a192b] mb-4 animate-[wiggle_3s_ease-in-out_infinite]  hover:scale-110 transition-all duration-500">
            <IoLogoJavascript className="fill-[#ff0]" size={100}/>
            <h1 className="text-xl text-[#ffff] text-center font-semibold font-mono">
              JavaScript
            </h1>
          </div>
        </a>
        <a href="https://reactjs.org/" rel="noreferrer" target="_blank">
          <div className="shadow-lg p-8 rounded-xl shadow-[#09abfe] bg-[#0a192b] mb-4 animate-[rewiggle_3s_ease-in-out_infinite]  hover:scale-110 transition-all duration-500">
            <FaReact className="fill-[#09abff]" size={100}/>
              
            <h1 className="text-xl text-[#ffff] text-center font-semibold font-mono">
              React
            </h1>
          </div>
        </a>
      </div>
      <div className="lg:flex mb-4 justify-between w-[60%] lg:w-[60%]">
        <a
          href="https://www.mongodb.com/docs/"
          rel="noreferrer"
          target="_blank"
        >
          <div className="shadow-lg p-8  shadow-[#378805] rounded-xl bg-[#0a192b] mb-4 animate-[rewiggle_3s_ease-in-out_infinite]  hover:scale-110 transition-all duration-500">
            <DiMongodb size={100} className="fill-[#378802]"/>  
            <h1 className="text-xl text-[#ffff] text-center p- font-semibold font-mono">
              MongoDb
            </h1>
          </div>
        </a>
       
        <a href="https://getbootstrap.com/" rel="noreferrer" target="_blank">
          <div className="shadow-lg shadow-[#023e8a] p-8 rounded-xl bg-[#0a192b] first-letter:mb-4 animate-[wiggle_3s_ease-in-out_infinite]  hover:scale-110 transition-all duration-500">
            <SiCsharp size={100} className="fill-[#023e8a]"/> 
            
            <h1 className="text-xl text-[#ffff]  text-center font-semibold font-mono">
              C#
            </h1>
          </div>
        </a>
        <a href="https://nodejs.org/en/" rel="noreferrer" target="_blank">
          <div className="shadow-lg shadow-[#37a838] p-8 rounded-xl bg-[#0a192b] mb-4 animate-[wiggle_3s_ease-in-out_infinite] hover:scale-110 transition-all duration-500">
            <FaNode size={100} className="fill-[#378802]"/>
            
            <h1 className="text-xl text-[#ffff] text-center font-semibold font-mono">
              Node.js
            </h1>
          </div>
        </a>

        <a href="https://tailwindcss.com/" rel="noreferrer" target="_blank">
          <div className="shadow-lg shadow-[#09adff] p-8 rounded-xl bg-[#0a192b] first-letter:mb-4 animate-[wiggle_3s_ease-in-out_infinite]  hover:scale-110 transition-all duration-500">
            <SiTailwindcss size={100} className="fill-[#09abff]"/>
             
            <h1 className="text-xl text-[#ffff]  text-center font-semibold font-mono">
              TailwindCss
            </h1>
          </div>
        </a>
      </div>

      <div className="lg:flex mb-4 justify-between w-[60%] lg:w-[60%]">
        <a
          href="https://expressjs.com/"
          rel="noreferrer"
          target="_blank"
        >
          <div className="shadow-lg p-8  shadow-[#ffde] rounded-xl bg-[#0a192b] mb-4 animate-[rewiggle_3s_ease-in-out_infinite]  hover:scale-110 transition-all duration-500">
            <SiExpress size={100} className="fill-[#ffde]"/>
             
            <h1 className="text-xl text-[#ffff] text-center p- font-semibold font-mono">
              Express.js
            </h1>
          </div>
        </a>
        <a href="https://www.typescriptlang.org/" rel="noreferrer" target="_blank">
          <div className="shadow-lg shadow-[#45fe] p-8 rounded-xl bg-[#0a192b] mb-4 animate-[rewiggle_3s_ease-in-out_infinite]  hover:scale-110 transition-all duration-500">
            <SiTypescript size={100} className="fill-[#25ff]"/>
             
            <h1 className="text-xl text-[#ffff]  text-center font-semibold font-mono">
             TypeScript
            </h1>
          </div>
        </a>
        <a href="https://sass-lang.com/documentation/" rel="noreferrer" target="_blank">
          <div className="shadow-lg shadow-[#25ff] p-8 rounded-xl bg-[#0a192b] mb-4 animate-[wiggle_3s_ease-in-out_infinite] hover:scale-110 transition-all duration-500">
            <FaDocker size={100} className="fill-[#25ff]"/>
             
            <h1 className="text-xl text-[#ffff] text-center font-semibold font-mono">
              Docker
            </h1>
          </div>
        </a>
        <a href="https://github.com/" rel="noreferrer" target="_blank">
          <div className="shadow-lg shadow-[#ffea] p-8 rounded-xl bg-[#0a192b] mb-4 animate-[rewiggle_3s_ease-in-out_infinite]  hover:scale-110 transition-all duration-500">
            <FaGithubSquare size={100}/>
            <h1 className="text-xl text-[#ffff]  text-center font-semibold font-mono">
              GitHub
            </h1>
          </div>
        </a>
       
      </div>
    </Element>
  );
}

export default Tech;
