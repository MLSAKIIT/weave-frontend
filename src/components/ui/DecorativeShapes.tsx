import React from "react";

const DecorativeShapes = () => {
  return (
    <>
      {/* Large Dotted Circle (Top Left) */}
      <div className="hidden sm:block absolute top-[-100px] left-[-100px] w-96 h-96 border-4 border-dashed border-[#f1a650] rounded-full blur-sm"></div>

      {/* Small Solid Circle (Top Right) */}
      <div className="hidden sm:block absolute top-10 right-[-30px] w-16 h-16 border border-[#F97316] rounded-full"></div>

      {/* Blur Circle (Bottom Right) */}
      <div className="hidden sm:block absolute bottom-[-100px] right-[-100px] w-60 h-60 bg-[#f9731660] rounded-full blur-3xl"></div>
    </>
  );
};

export default DecorativeShapes;
