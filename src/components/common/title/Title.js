import React from "react";

import "./Title.css";

const Title = ({ title, subTitle }) => {
  return (
    <>
      <div className="bg-white">
        <div className="title bg-primaryDark dark:bg-gray-100">
          <div className="n-container">
            <h1 className="text-center text-3xl sm:text-3xl font-bold text-white pt-10 pb-3 sm:pb-5">
              {title}
            </h1>
            <div className="max-w-[80%] m-auto pb-6">{subTitle}</div>
            <div className="flex justify-center gap-2 pb-14">
              <div className="w-24 bg-primaryPink h-2 rounded-full"></div>
              <div className="w-8 bg-primaryPink h-2 rounded-full"></div>
              <div className="w-2 bg-primaryPink h-2 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Title;
