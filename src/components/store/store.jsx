import React, { useEffect, useState } from "react";
import Product from "./product";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, searchProduct } from "../../redux/actions/productAction";
import Pagination from "../pagination";

const Store = () => {
  const products = useSelector((state) => state.product.products);

  const [myProducts, setProducts] = useState(products);
  console.log(myProducts);

  const currentPage = useSelector((state) => state.product.currentPage);
  const perPage = useSelector((state) => state.product.perPage);
  const [searchText, setsearchText] = useState({ searchText: "" });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(currentPage, perPage));
    dispatch(searchProduct(searchText.searchText));
  }, [currentPage, searchText]);

  const handleChange = (e) => {
    e.preventDefault();
    setsearchText({ searchText: e.target.value });
  };

  return (
    <>
      <div
        className="store"
        style={{
          margin: "2rem auto",
        }}
      >
        <h2>Store</h2>
        <input
          type="search"
          className="input input--text-color-primary input--border-primary input--padding-xs input--border-radius-md input--bg-info"
          placeholder="search ..."
          value={searchText.searchText}
          onChange={handleChange}
        />
      </div>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            gap: "12rem",
          }}
        >
          {products.map((prod) => (
            <Product key={prod._id} product={prod}></Product>
          ))}
        </div>
      </div>

      <section className="pagination">
        <Pagination reducer="product"></Pagination>
      </section>
    </>
  );
};

export default Store;
