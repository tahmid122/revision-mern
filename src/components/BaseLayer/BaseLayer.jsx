import React from "react";

const BaseLayer = ({ content }) => {
  return (
    <div>
      {/* top image */}
      <div className="h-[12vh] relative">
        <img
          src="../../../src/assets/Desktop.png"
          alt=""
          className="w-full h-full"
        />
        {/* side image */}
        <img
          src="../../../src/assets/roadmap.png"
          alt=""
          className="absolute right-0 top-0 h-full opacity-50 object-contain"
        />
      </div>
      {/* Lower body */}
      <div className="h-[88vh] w-full ">
        {/* Content */}
        <div className="w-[90%] h-[90%]  overflow-y-auto mx-auto rounded-2xl p-5 shadow-md -translate-y-10 bg-white flex items-center justify-center">
          {content && content}
        </div>
      </div>
    </div>
  );
};

export default BaseLayer;
