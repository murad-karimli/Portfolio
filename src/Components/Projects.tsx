import React from "react";
import countries from "../img/countries.png";
import brand from "../img/brand.png";
import snapshot from "../img/snapshot.png";
import blogr from "../img/blogr.png";
import coin from "../img/coin.png";
import todo from "../img/todo.png";
import { Element } from "react-scroll";
function Projects() {
  return (
    <Element
      name="projects"
      className="flex justify-center items-center flex-col py-24"
    >
      <div className="flex lg:flex-row  w-[80%] justify-center mx-auto flex-col items-center ">
        <div className=" p-4 py-4 lg:w-[33%] h-[400px] bg-[#5592] m-8 shadow-lg shadow-[#4ff7]  rounded-3xl ">
          <img src={countries} alt="el" className="rounded-xl h-[60%]" />
          <p className="text-[#ffff] text-xl font-semibold text-center py-4">
            Countries App
          </p>
          <div className="flex px-12 justify-between">
            <a
              href="https://github.com/murad-karimli/Countries-app"
              rel="noreferrer noopener"
              target="_blank"
            >
              <button className="text-[#fffe] mr-4  p-4 bg-[#4345] rounded-xl md:mx-auto hover:opacity-50">
                Code
              </button>
            </a>
            <a
              href="https://murad-karimli.github.io/Countries-app/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <button className="text-[#fffe] p-4 bg-[#4345] rounded-xl mx-auto hover:opacity-50">
                Demo
              </button>
            </a>
          </div>
        </div>
        <div className=" p-4 py-4 lg:w-[33%] h-[400px] bg-[#5592] m-8 shadow-lg shadow-[#4ff7]  rounded-3xl">
          <img src={brand} alt="el" className="rounded-xl h-[60%]" />
          <p className="text-[#ffff] text-xl font-semibold text-center py-4">
            {" "}
            Brand
          </p>
          <div className="flex px-12 justify-between">
            <a
              href="https://github.com/murad-karimli/Brand"
              rel="noreferrer noopener"
              target="_blank"
            >
              <button className="text-[#fffe] mr-4  p-4 bg-[#4345] rounded-xl mx-auto hover:opacity-50">
                Code
              </button>
            </a>
            <a href="£" rel="noreferrer noopener" target="_blank">
              <button className="text-[#fffe] p-4 bg-[#4345] rounded-xl mx-auto hover:opacity-50">
                Demo
              </button>
            </a>
          </div>
        </div>
        <div className="p-4 py-4 lg:w-[33%] h-[400px] bg-[#5592] m-8 shadow-lg shadow-[#4ff7]  rounded-3xl">
          <img src={todo} alt="el" className="rounded-xl h-[60%]" />
          <p className="text-[#ffff] text-xl font-semibold text-center py-4">
            {" "}
            ToDo
          </p>
          <div className="flex px-12 justify-between">
            <a  
              href="https://github.com/murad-karimli/ToDO"
              rel="noreferrer noopener"
              target="_blank"
            >
              <button className="text-[#fffe] mr-4  p-4 bg-[#4345] rounded-xl mx-auto hover:opacity-50">
                Code
              </button>
            </a>
            <a
              href="https://murad-karimli.github.io/todo-app/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <button className="text-[#fffe] p-4 bg-[#4345] rounded-xl mx-auto hover:opacity-50">
                Demo
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row  sm:w-[80%] w-[90%] justify-center  mx-auto flex-col items-center ">
        <div className="p-4 py-4 lg:w-[33%] h-[400px] bg-[#5592] m-8 shadow-lg shadow-[#4ff7]  rounded-3xl">
          <img src={snapshot} alt="el" className="rounded-xl h-[60%]" />
          <p className="text-[#ffff] text-xl font-semibold text-center py-4">
            {" "}
            SnapShot
          </p>
          <div className="flex px-12 justify-between">
            <a
              href="https://github.com/murad-karimli/snap-react-app/tree/master"
              rel="noreferrer noopener"
              target="_blank"
            >
              <button className="text-[#fffe] mr-4  p-4 bg-[#4345] rounded-xl mx-auto hover:opacity-50">
                Code
              </button>
            </a>
            <a
              href="https://murad-karimli.github.io/snap-react-app/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <button className="text-[#fffe] p-4 bg-[#4345] rounded-xl mx-auto hover:opacity-50">
                Demo
              </button>
            </a>
          </div>
        </div>
        <div className="p-4 py-4 lg:w-[33%] h-[400px] bg-[#5592] m-8 shadow-lg shadow-[#4ff7]  rounded-3xl">
          <img src={blogr} alt="el" className="rounded-xl h-[60%]" />
          <p className="text-[#ffff] text-xl font-semibold text-center py-4">
            {" "}
            Blogr
          </p>
          <div className="flex px-12 justify-between">
            <a
              href="https://github.com/murad-karimli/blogr"
              rel="noreferrer noopener"
              target="_blank"
            >
              <button className="text-[#fffe] mr-4  p-4 bg-[#4345] rounded-xl mx-auto hover:opacity-50">
                Code
              </button>
            </a>
            <a
              href="https://murad-karimli.github.io/blogr/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <button className="text-[#fffe] p-4 bg-[#4345] rounded-xl mx-auto hover:opacity-50">
                Demo
              </button>
            </a>
          </div>
        </div>
        <div className=" p-4 py-4 lg:w-[33%] h-[400px] bg-[#5592] m-8 shadow-lg shadow-[#4ff7]  rounded-3xl">
          <img src={coin} alt="el" className="rounded-xl h-[60%]" />
          <p className="text-[#ffff] text-xl font-semibold text-center py-4 ">
            {" "}
            Coingecko
          </p>
          <div className="flex px-8 justify-between">
            <a
              className="mx-auto"
              href="https://github.com/murad-karimli/CoinGecko_app"
              rel="noreferrer noopener"
              target="_blank"
            >
             
             <button className="text-[#fffe] p-4  mr-4 bg-[#4345] rounded-xl  hover:opacity-50">
                Code
              </button>
            </a>
            <button disabled={true} className="text-[#fffe] p-4 bg-[#4345] rounded-xl mx-auto hover:opacity-50">
                Demo
              </button>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Projects;
