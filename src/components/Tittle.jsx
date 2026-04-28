import React from "react";

const Tittle = ({ tittle, subTittle, align }) => {
  return (
    <>
      <div
        className={`flex flex-col justify-center items-center text-center ${
          align === "left" && "md:items-start md:text-left"
        }`}
      >
        <h1 className="font-semibold text-4xl md:text-[40px] text-black">
          {tittle}
        </h1>
        <p className="text-sm md:text-xl text-gray-500 mt-2 max-w-156">
          {subTittle}
        </p>
      </div>
    </>
  );
};

export default Tittle;
