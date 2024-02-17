import NavBar from "@/components/common/navBar/navBar";
import React from "react";
import HotelFilter from "@/components/home/heroSection/hotelFilter";
import Breadcrumb from "@/components/common/breadcrumb";
import SearchPage from "@/components/searchResults/searchPage";
import SecondaryNavbar from "@/components/common/navBar/secondaryNavbar";

const Page = () => {


  return (
    <div className="">
      <div>
        <SecondaryNavbar />
      </div>
      <div className="py-2 pb-5 bg-[#eff6ff] mx-5 md:mx-10 lg:mx-36 rounded-2xl -translate-y-1/2">
        <div>
          <HotelFilter />
        </div>
      </div>
      <div className="px-5 md:px-10 lg:px-36">
        <div>
          <Breadcrumb />
        </div>
        <div>
          <SearchPage />
        </div>
      </div>
    </div>
  );
};

export default Page;
