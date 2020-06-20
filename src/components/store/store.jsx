import React from "react";
import Product from "./product";
import { useSelector } from "react-redux";

const Store = () => {
  const products = useSelector((state) => state.products);
  console.log(products);
  return (
    <>
      <div>Store</div>
      {/* {products}.map(prod => 
            <products></products>
      ) */}
    </>
  );
};

export default Store;
