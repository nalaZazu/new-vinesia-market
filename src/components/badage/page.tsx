import Image from "next/image";
import React from "react";
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
      <div className="pt-6   pb-8 flex gap-2 flex-wrap">
        {selectedItems &&
          selectedItems?.map((item: any, i: any) => {
            return (
              <div key={i}>
                <span className="pl-4 pr-2 py-2 border-orange-700 border-opacity-20 rounded-[100px]  border justify-center items-center gap-1 inline-flex">
                  <p className=" text-zinc-800 text-xs font-normal  uppercase leading-3 tracking-tight">
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
            className="text-center text-orange-700 text-xs font-normal  uppercase leading-3 tracking-tight"
            onClick={handleClear}
          >
            Clear all
          </button>
        )}
      </div>
    </React.Fragment>
  );
};

export default Badges;
