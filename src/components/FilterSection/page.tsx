import MobileFilter from "@/components/FilterSection/moibleview/page";
import Dropdown from "@/common/DropDown/page";
import DropDownButton from "@/common/DropDownButton";
import React from "react";
import Filters from "@/components/Filters/page";

export default function FilterSection({
  selectedFilters,
  setSelectedFilters,
  priceRange,
  setPriceRange,
}: {
  selectedFilters?: any;
  setSelectedFilters?: any;
  priceRange?: any;
  setPriceRange?: any;
}) {
  return (
    <div>
      <div className="hidden md:block">
        <div className="flex justify-between  gap-4">
          <div>
            <Filters
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          </div>
          {/* second div */}

          <div className="flex  justify-end gap-2 pe-2  pt-2 md:pt-0">
            <p className="text-primary text-xs font-normal  tracking-wide pt-4">
              Sort by
            </p>
            <div className="w-44">
              {" "}
              <DropDownButton />
            </div>
          </div>
        </div>
        {/* <div className=" border-red-700 border-[0.5px]  mt-12"></div> */}
      </div>
      {/* Mobile view */}
      <div className="md:hidden block">
        <MobileFilter
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
      </div>
    </div>
  );
}
