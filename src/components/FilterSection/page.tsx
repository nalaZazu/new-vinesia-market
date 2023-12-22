import MobileFilter from "@/app/invest/moibleview/page";
import Dropdown from "@/common/DropDown/page";
import DropDownButton from "@/common/DropDownButton";
import React from "react";
import Filters from "@/components/Filters/page";

export default function FilterSection({selectedFilters, setSelectedFilters}:{selectedFilters?:any, setSelectedFilters?:any}) {
  return (
    <div>
      <div className="hidden md:block">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
          <div>
            <Filters selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
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
        <div className=" border-red-700 border-[0.5px]  mt-12"></div>
      </div>
      {/* Mobile view */}
      <div className="md:hidden block">
        <MobileFilter />
      </div>
    </div>
  );
}
