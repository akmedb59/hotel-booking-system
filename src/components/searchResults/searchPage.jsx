import React from "react";
import SearchFilters from "./searchFilters";
import ResultsList from "./resultsList";

const SearchPage = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1">
        <SearchFilters />
      </div>
      <div className="col-span-3">
        <ResultsList />
      </div>
    </div>
  );
};

export default SearchPage;
