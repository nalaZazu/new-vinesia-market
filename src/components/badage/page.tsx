import Image from "next/image";
import React  from "react";
import xDelete from "../../assets/icons/X-delete.svg";
const Badges = ({
  selectedItems,
  setSelectedItems,
}: {
  selectedItems: any;
  setSelectedItems: any;
}) => { 
  const handleRemoved = (itemToRemove: string) => {
    const updatedItems = selectedItems.filter(
      (item: any) => item !== itemToRemove
    );
    setSelectedItems(updatedItems);
  };
  const handleClear = () => {
    setSelectedItems([]);
  };
  return (
    <React.Fragment>
      <div className="pt-4  md:pt-0 pb-8 flex gap-2 flex-wrap">
        {selectedItems &&
          selectedItems?.map((item: any, i: any) => {
            return (
              <div key={i}>
                <span className=" px-3 py-2 bg-orange-700 bg-opacity-10 rounded-[100px]  justify-center items-center gap-1 inline-flex">
                  <p className="text-primary text-xxs font-normal tracking-wide capitalize">
                    {item}
                  </p>
                  <Image
                    src={xDelete}
                    alt="x-delete"
                    onClick={() => handleRemoved(item)}
                    className=" cursor-pointer"
                  />
                </span>
              </div>
            );
          })}
        {selectedItems && selectedItems.length > 0 && (
          <button
            className="text-center text-primary text-sm font-medium  tracking-wide"
            onClick={handleClear}
          >
            Clear filters
          </button>
        )}
      </div>
    </React.Fragment>
  );
};

export default Badges;
