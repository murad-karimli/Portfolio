import myPhoto from "../img/myPhoto.jpg";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";
import { Element } from "react-scroll";
import ExampleComponent from "./ex";
//import { TypeAnimation } from "react-type-animation";
function Header() {
  return (
    <>
      <Element
        className="lg:flex-row overflow-x-hidden flex-col justify-center items-center  flex font-700 p-2 mx-auto md:mx-2 md:p-8 py-20 "
        name="header"
      >
        <div className="mx-auto  lg:mx-8 relative flex w-[90%] md:w-[30%] items-center justify-center">
          <img
            className="rounded-3xl h-96 mb-8 shadow-md opacity-50  shadow-[#ffe]"
            alt="myPhoto"
            src={myPhoto}
          />
        </div>

        <div className="text-white text-xl flex h-[400px] flex-col p-8 md:p-16 w-[90%]  md:w-[50%] rounded-2xl shadow-[#ffee] my-auto shadow-md md:mx-2 mx-auto bg-[#4242]">
        <ExampleComponent/>
          <pre className="text-xl w-[80%]">
            <code>
              <span className="text-blue-500">var</span>{" "}
              <span className="text-yellow-500">skills</span> = {"{"}
              <br />
              <span className="text-green-500">FrontEnd</span>:{" "}
              <span className="text-green-500">"✅"</span>,<br />
              <span className="text-green-500">BackEnd</span>:{" "}
              <span className="text-green-500">"✅"</span>,<br />
              <span className="text-green-500">SOCAnalysis</span>:{" "}
              <span className="text-green-500">"✅"</span>
              <br />
              {"}"};<br />
              <span className="text-yellow-500">res</span>.
              <span className="text-yellow-500">status(200)</span>.
              <span className="text-yellow-500">json(skills)</span>;
            </code>
          </pre>
        </div>
      </Element>
    </>
  );
}

export default Header;
