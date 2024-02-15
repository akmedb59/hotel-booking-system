import NavBar from "@/components/common/navBar/navBar";
import React from "react";
import { FaBed } from "react-icons/fa";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { MdAirportShuttle } from "react-icons/md";
import { MdAttractions } from "react-icons/md";
import HotelFilter from "@/components/home/heroSection/hotelFilter";

const Page = () => {
  const sections = [
    {
      title: "Hotels",
      icon: <FaBed />,
    },
    {
      title: "Flights",
      icon: <MdOutlineFlightTakeoff />,
    },
    {
      title: "Cars",
      icon: <FaCar />,
    },
    {
      title: "Attractions",
      icon: <MdAttractions />,
    },
    {
      title: "Airport Taxis",
      icon: <MdAirportShuttle />,
    },
  ];

  return (
    <div className="">
      <div className="bg-blue-600 text-white">
        <NavBar />
        <div className="flex items-center gap-5 pb-20 px-5 md:px-10 lg:px-36">
          {sections.map((section, index) => {
            return (
              <div
                key={index}
                className="flex items-center gap-1 active:border w-fit px-3 py-2 rounded-full cursor-pointer"
              >
                <div className="text-2xl">{section.icon}</div>
                <div>{section.title}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="py-2 pb-5 bg-[#eff6ff] mx-5 md:mx-10 lg:mx-36 rounded-2xl -translate-y-1/2">
        <div>
          <HotelFilter />
        </div>
      </div>
    </div>
  );
};

export default Page;
