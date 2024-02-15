import React from "react";
import SectionHeader from "../sectionHeader";
import DestinationCarousel from "./destinationCarousel";

const FeaturedDestinations = () => {
  return (
    <div className="min-h-screen relative">
      <div className="bg-[#eff6ff] w-1/2 absolute left-0 -top-40 h-full rounded-r-3xl p-10">
        <SectionHeader title="Featured Destinations" />
        <p className="text-sm text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic ad
          soluta nisi aliquam tempore in quaerat cumque quisquam perferendis,
          quam, quis sit ut earum! Ex explicabo consectetur repellendus
          similique nihil.
        </p>
      </div>
      <div className="w-full h-full items-center z-50 mt-20">
        <DestinationCarousel />
      </div>
    </div>
  );
};

export default FeaturedDestinations;
