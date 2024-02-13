import React from "react";

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/heroBg.jpg')",
        height: "calc(90vh)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex-col px-5 md:px-10 lg:px-36 bg-white bg-opacity-5 h-full w-full flex items-start justify-center gap-10">
        <h1 className="text-6xl md:w-1/2 text-white font-semibold">
          Book the best hotel in beautiful countries
        </h1>
        <button className="bg-orange-600 text-white px-5 py-2 rounded-md ">Explore Our Hotels</button>
      </div>
    </div>
  );
};

export default HeroSection;
