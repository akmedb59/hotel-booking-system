import React from "react";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
const ResultCard = ({
  name = "Hotel Name",
  img = "url('/destinations (1).jpg')",
  rating = 8.5,
  star = 5,
}) => {
  return (
    <div className="p-3 rounded-xl border overflow-hidden grid grid-cols-12 gap-3">
      <div
        style={{
          backgroundImage: img,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="relative h-[11rem] w-full rounded-xl overflow-hidden col-span-3"
      >
        <div className="rounded-full bg-white text-orange-500 p-1 absolute top-2 right-2">
          <FaRegHeart />
        </div>
      </div>
      <div className="h-full col-span-7 ">
        <div className="flex items-center gap-5">
          <h3 className="text-xl font-semibold text-blue-600 hover:text-orange-500 cursor-pointer">
            {name}
          </h3>
          <div className="flex items-center gap-1 text-yellow-400 w-fit text-xs">
            {Array.from({ length: star }, (_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <div className="bg-orange-500 flex items-center gap-1 text-white px-2 py-1 rounded-xl text-xs">
            <FaThumbsUp />
            <FaPlus />
          </div>
        </div>
        <div className="flex gap-2 text-xs">
          <div>Area</div>
          <div>City</div>
          <div>Show on Map</div>
          <div>3.5 km from center</div>
        </div>
        <p className="text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </p>
      </div>
      <div className="col-span-2">
        <div className="flex items-center gap-1 justify-between">
          <div>
            <h4 className="font-semibold whitespace-nowrap text-base">
              Very Good
            </h4>
            <p className="text-xs font-light text-right">100 reviews</p>
          </div>
          <div className="bg-blue-900 text-white p-1 rounded-md">{rating}</div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
