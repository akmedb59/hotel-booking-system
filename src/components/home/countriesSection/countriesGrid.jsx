import React from "react";
import CountryCard from "./countryCard";

const CountriesGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-5 py-5">
      <div>
        <CountryCard name={"Indonesia"} />
      </div>
      <div className="grid grid-rows-2 gap-5">
        <CountryCard name={"Indonesia"} />
        <CountryCard name={"Indonesia"} />
      </div>
    </div>
  );
};

export default CountriesGrid;
