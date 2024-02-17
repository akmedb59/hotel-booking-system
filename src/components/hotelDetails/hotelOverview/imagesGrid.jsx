import React from "react";
import Image from "next/image";
import RatingCard from "./ratingCard";

const ImagesGrid = () => {
  return (
    <div className="grid grid-rows-7 gap-2">
      <div className="grid grid-cols-3 row-span-5 gap-2">
        <div className="col-span-1 grid gap-2 grid-rows-2">
          <Image
            src="/destinations (2).jpg"
            width={500}
            height={200}
            className="h-full w-full object-cover"
          />
          <Image
            src="/destinations (2).jpg"
            width={500}
            height={300}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="col-span-2 relative">
          <Image
            src="/destinations (2).jpg"
            width={500}
            height={300}
            className="h-full w-full object-cover"
          />
          <div className="absolute top-2 right-2">
            <RatingCard/>
          </div>
        </div>
      </div>
      <div className="row-span-2 grid grid-cols-8 gap-2">
        {Array.from({ length: 8 }, (_, i) => (
          <Image
            key={i}
            src="/hotel (2).jpg"
            width={500}
            height={500}
            className="h-full w-full object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default ImagesGrid;
