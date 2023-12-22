import Filters from "@/components/Filters/page";
import React from "react";
import DropDownButton from "../DropDownButton";

const Dropdown = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
        <div>
          <Filters />
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
    </React.Fragment>
  );
};

export default Dropdown;
