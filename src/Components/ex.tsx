import { ReactTyped } from "react-typed";
import { IoIosSearch } from "react-icons/io";

const ExampleComponent = () => {
  return (
   
    <div className="p-2 m-auto">
        <ReactTyped
      strings={[
        "I'm Front-end developer",
        "I'm Back-end developer",
        "I'm Full-stack developer",
        "I'm SOC analysist"
      ]}
      typeSpeed={40}
      backSpeed={50}
     // attr="placeholder"
      loop
      className="m-2"
      style={{
        "color":"blue",
        "width":"50%"
      }}
    >
      <input type="text" />
    </ReactTyped>
    <IoIosSearch className="inline" size={30}/>
    </div>

  );
};
export default ExampleComponent;