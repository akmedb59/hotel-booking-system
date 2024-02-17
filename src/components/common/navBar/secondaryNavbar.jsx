import React from 'react'
import NavBar from './navBar';
import { FaBed } from "react-icons/fa";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { MdAirportShuttle } from "react-icons/md";
import { MdAttractions } from "react-icons/md";



const SecondaryNavbar = () => {
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
  );
}

export default SecondaryNavbar