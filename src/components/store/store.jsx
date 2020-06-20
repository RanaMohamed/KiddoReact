import React, { useEffect } from "react";
import Product from "./product";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productAction";

const Store = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            gap: "12rem",
          }}
        >
          {products?.map((prod) => (
            <Product key={prod._id} product={prod}></Product>
          ))}
        </div>
      </div>
    </>
  );
};

export default Store;
