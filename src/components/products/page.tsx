import React from "react";
import winebotel from "../../assets/images/winebotel1.png";
import Art from "../../assets/images/arat.png";
import Image from "next/image";
import ProductCards from "../productCard/page";

const Product = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 mt-16 gap-x-6 gap-y-10">
        {[1, 2, 3, 4]?.map((item: any, i: any) => {
          return (
            <div key={i}>
              <ProductCards />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Product;
