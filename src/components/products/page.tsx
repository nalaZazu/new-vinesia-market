import React from "react";
import ProductCards from "../productCard/page";
import { ProductCardDto } from "@/types/productCard.dto";
import ScrollAnimation from "@/common/ScrollAnimation/page";
// Temporarly Added Default Products as Apis not fully integrated
const Product = ({ items }: { items?: ProductCardDto[] }) => {
  function splitToChunks(items: ProductCardDto[]): ProductCardDto[][] {
    const result: ProductCardDto[][] = [];

    if (items === undefined || items.length === 0) return result;

    const chunkSize = 8;
    for (let i = 0; i < items.length; i += chunkSize) {
      const chunk = items.slice(i, i + chunkSize);
      result.push(chunk);
    }

    return result;
  }

  return (
    <React.Fragment>
      {items &&
        splitToChunks(items).map((item, i) => {
          return (
            <>
              <div
                key={i}
                className="grid xl:grid-cols-4  lg:grid-cols-3 gap-8 md:grid-cols-2 grid-cols-1 pt-20"
              >
                {item === undefined ? (
                  <></>
                ) : (
                  item.map((item2, i) => {
                    return (
                      <div key={i}>
                        <ProductCards item={item2} />
                      </div>
                    );
                  })
                )}
              </div>
            </>
          );
        })}
    </React.Fragment>
  );
};

export default Product;
