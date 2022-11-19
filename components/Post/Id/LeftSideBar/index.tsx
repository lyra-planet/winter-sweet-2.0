import LeftSideBar from "../../../LeftSideBar";
import { Toc } from "../../../../assets";
import { useState } from "react";

const index = ({ children }) => {
  const [change, setChange] = useState(false);
  const [left, right] = children;
  return (
    <div className="border-r h-full">
      <div className="bg-red-500 z-10 fixed right-8 bottom-1/4 p-1">
        <button onClick={() => setChange((change) => !change)}>
          <div className="w-11 h-11 flex justify-center items-center">
            <Toc className="w-10 h-10 text-white" />
          </div>
        </button>
      </div>
      <div className={`relative group/sideBar h-full ${change ? "showNav" : ""}`}>
        <section
          className="absolute
        z-10
        w-full
        h-screen
        flex flex-col items-center py-10
        translate-x-[-100%]
        bg-white
        group-[.showNav]/sideBar:translate-x-0
        transition duration-150"
        >
        {left}
        </section>
        <section className="flex flex-col bg-radial items-center z-0 pt-10 font-serif space-y-5 h-full">    
          <div className="text-lg 2xl:text-xl inline-block bg-black text-white py-1 px-2 border-b-2 border-red-500">
            文章目录
          </div>
          {right}
        </section>
      </div>
    </div>
  );
};

export default index;
