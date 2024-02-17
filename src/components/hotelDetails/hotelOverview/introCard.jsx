import React from "react";

import { FaLocationDot } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { GoShareAndroid } from "react-icons/go";
import { FaTag } from "react-icons/fa6";
import Link from "next/link";
import HotelRank from "./hotelRank";
import SustainabilityCard from "./sustainabilityCard";

const IntroCard = () => {
  return (
    <div className="flex justify-between py-3 gap-5">
      <div>
        <div className="flex gap-2 items-center">
          <HotelRank rank={4}/>
          <SustainabilityCard level={2}/>
        </div>
        <h3 className="text-2xl py-2 font-semibold">Hotel Name</h3>
        <div className="flex  items-center gap-1">
          <div>
            <FaLocationDot />
          </div>
          <p className="text-sm">
            School Road House no 36, F-6/3, opposite Shaheen Chemist., F-6
            Sector, 44000 Islamabad, Pakistan
          </p>
        </div>
        <Link href={"#"} className="text-blue-800 text-sm">
          -Excellent Location-Show map
        </Link>
      </div>
      <div>
        <div className="flex gap-2 items-center">
          <div className="text-2xl">
            <FaRegHeart />
          </div>
          <div className="text-2xl">
            <GoShareAndroid />
          </div>
          <button className="py-2 px-3 bg-blue-800 text-white">Reserve</button>
        </div>
        <div className="flex gap-2 items-center py-3 font-semibold text-sm w-fit ml-auto text-blue-800">
          <div>
            <FaTag />
          </div>
          <div>We price Match</div>
        </div>
      </div>
    </div>
  );
};

export default IntroCard;
