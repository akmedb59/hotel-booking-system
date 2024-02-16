"use client";
import React, { useEffect, useState } from "react";
import FilterCard from "./filterCard";
const filterss = [
  {
    name: "Free Cancellation",
    value: "freeCancellation",
  },
  {
    name: "Room Service",
    value: "roomService",
  },
  {
    name: "Very Good (8+)",
    value: "veryGood",
  },
  {
    name: "Fitness",
    value: "fitness",
  },
  {
    name: "Pet Friendly",
    value: "petFriendly",
  },
  {
    name: "Apartments",
    value: "apartments",
  },
  {
    name: "Guesthouses",
    value: "guesthouses",
  },
  // {
  //   name: "Hotels",
  //   value: "hotels",
  // },

  // {
  //   name: "Villas",
  //   value: "villas",
  // },
  // {
  //   name: "Parking",
  //   value: "parking",
  // },
  // {
  //   name: "Free WiFi",
  //   value: "freeWifi",
  // },
  // {
  //   name: "Restaurant",
  //   value: "restaurant",
  // },
  // {
  //   name: "Bed and Breakfasts",
  //   value: "bedAndBreakfasts",
  // },
  // {
  //   name: "1 Star",
  //   value: "1star",
  // },
  // {
  //   name: "2 Stars",
  //   value: "2stars",
  // },
  // {
  //   name: "3 Stars",
  //   value: "3stars",
  // },
  // {
  //   name: "4 Stars",
  //   value: "4stars",
  // },
  // {
  //   name: "5 Stars",
  //   value: "5stars",
  // },
  // {
  //   name: "Unrated",
  //   value: "unrated",
  // },
  // {
  //   name: "Private Pool",
  //   value: "privatePool",
  // },
  // {
  //   name: "Sea View",
  //   value: "seaView",
  // },
  // {
  //   name: "Air Conditioning",
  //   value: "airConditioning",
  // },
  // {
  //   name: "Private Bathroom",
  //   value: "privateBathroom",
  // },
  // {
  //   name: "Kitchen/Kitchenette",
  //   value: "kitchenKitchenette",
  // },
  // {
  //   name: "E-11 Sector",
  //   value: "E11Sector",
  // },
  // {
  //   name: "Blue Area",
  //   value: "blueArea",
  // },
  {
    name: "F-6 Sector",
    value: "F6Sector",
  },
  {
    name: "G-9 Sector",
    value: "G9Sector",
  },
  {
    name: "F-8 Sector",
    value: "F8Sector",
  },
  {
    name: "F-7 Sector",
    value: "F7Sector",
  },
  {
    name: "G-6 Sector",
    value: "G6Sector",
  },
  {
    name: "G-8 Sector",
    value: "G8Sector",
  },
  {
    name: "G-7 Sector",
    value: "G7Sector",
  },
  {
    name: "I-8 Sector",
    value: "I8Sector",
  },
  // {
  //   name: "Wonderful (9+)",
  //   value: "wonderful",
  // },
  // {
  //   name: "Very Good (8+)",
  //   value: "veryGood",
  // },
  // {
  //   name: "Good (7+)",
  //   value: "good",
  // },
  // {
  //   name: "Pleasant (6+)",
  //   value: "pleasant",
  // },
  // {
  //   name: "Hot Tub/Jacuzzi",
  //   value: "hotTubJacuzzi",
  // },
  // {
  //   name: "Hiking",
  //   value: "hiking",
  // },
  // {
  //   name: "Walking Tours",
  //   value: "walkingTours",
  // },
  // {
  //   name: "Fitness Center",
  //   value: "fitnessCenter",
  // },
  // {
  //   name: "Landmarks",
  //   value: "landmarks",
  // },
  // {
  //   name: "Entire Homes & Apartments",
  //   value: "entireHomesAndApartments",
  // },
  // {
  //   name: "Upper Floors Accessible by Elevator",
  //   value: "upperFloorsAccessibleByElevator",
  // },
  // {
  //   name: "Entire Unit Wheelchair Accessible",
  //   value: "entireUnitWheelchairAccessible",
  // },
  // {
  //   name: "Toilet with Grab Rails",
  //   value: "toiletWithGrabRails",
  // },
  // {
  //   name: "Adapted Bath",
  //   value: "adaptedBath",
  // },
  // {
  //   name: "Roll-in Shower",
  //   value: "rollInShower",
  // },
  // {
  //   name: "Walk-in Shower",
  //   value: "walkInShower",
  // },
  // {
  //   name: "Raised Toilet",
  //   value: "raisedToilet",
  // },
  // {
  //   name: "Lower Sink",
  //   value: "lowerSink",
  // },
  // {
  //   name: "Emergency Cord in Bathroom",
  //   value: "emergencyCordInBathroom",
  // },
  // {
  //   name: "Shower Chair",
  //   value: "showerChair",
  // },
  // {
  //   name: "Ramada",
  //   value: "ramada",
  // },
  // {
  //   name: "Marriott Hotels & Resorts",
  //   value: "marriottHotelsAndResorts",
  // },
  // {
  //   name: "Best Western Premier",
  //   value: "bestWesternPremier",
  // },
  // {
  //   name: "Serena Hotels",
  //   value: "serenaHotels",
  // },
  // {
  //   name: "Property Accessibility",
  //   value: "propertyAccessibility",
  // },
  // {
  //   name: "Visual Aids (Braille)",
  //   value: "visualAidsBraille",
  // },
  // {
  //   name: "Visual Aids (Tactile Signs)",
  //   value: "visualAidsTactileSigns",
  // },
  // {
  //   name: "Auditory Guidance",
  //   value: "auditoryGuidance",
  // },
];

const SearchFilters = ({ setRatingFilters, ratingFilters }) => {
  const filterData = [
    { name: "1 Star", value: 1 },
    { name: "2 Star", value: 2 },
    { name: "3 Star", value: 3 },
    { name: "4 Star", value: 4 },
    { name: "5 Star", value: 5 },
    { name: "Unrated", value: 0 },
  ];
  const [isChecked, setIsChecked] = useState(null);
  return (
    <div className="border rounded-lg">
      <div className="font-bold px-3 py-2 border-b">Filter by:</div>
      <div>
        <ul className="px-3">
          <h3 className="font-semibold text-sm py-2">Property Rating:</h3>
          {filterData.map((filter, index) => (
            <FilterCard
              key={index}
              name={filter.name}
              value={filter.value}
              setFilters={setRatingFilters}
              filters={ratingFilters}
              setIsChecked={setIsChecked}
              isChecked={isChecked}
            />
          ))}
          {/*         
            {filters.map((filter) => (
            <FilterCard
              key={filter.value}
              name={filter.name}
              value={filter.value}
              onFilterChange={handleFilterChange}
            />
          ))} */}
        </ul>
      </div>
    </div>
  );
};

export default SearchFilters;
