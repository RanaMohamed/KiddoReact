import React, { useEffect, useState } from "react";
import Product from "./product";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, searchProduct } from "../../redux/actions/productAction";
import Pagination from "../pagination";
import Filter from "../filter";
import Advert from "../advet";

const Store = () => {
	const products = useSelector((state) => state.product.products);
	const loading = useSelector((state) => state.request.pending);
	const selectedCategories = useSelector(
		(state) => state.categories.selectedCategory
	);

	const currentPage = useSelector((state) => state.product.currentPage);
	const perPage = useSelector((state) => state.product.perPage);
	const [search, setSearch] = useState("");
	const [searchText, setsearchText] = useState({ searchText: "" });

	const dispatch = useDispatch();

	useEffect(() => {
		if (search) dispatch(searchProduct(search, selectedCategories));
		else dispatch(getProducts(currentPage, perPage, selectedCategories));
	}, [currentPage, dispatch, perPage, search, selectedCategories]);

	const handleChange = (e) => {
		e.preventDefault();
		if (e.target.value === "") setSearch("");
		setsearchText({ searchText: e.target.value });
	};

	return (
		<>
			<div className="container">
				<Advert></Advert>
				<div className="d-flex justify-content-between align-items-center my-lg">
					<h2 className="color-1">Store</h2>
					<input
						type="search"
						className="w-20 input input--text-color-primary input--border-primary input--padding-xs input--border-radius-md input--bg-info"
						placeholder="search ..."
						value={searchText.searchText}
						onChange={handleChange}
						onBlur={(e) => setSearch(e.target.value)}
					/>
				</div>
				<div className="d-flex">
					<div className="w-20">
						<Filter></Filter>
					</div>
					<div className="" style={{ flex: 1 }}>
						{!loading && products.length === 0 && (
							<h2>No products available</h2>
						)}
						{loading && (
							<div className="text-center">
								<span className="btn btn--1 btn--rect loading"></span>
							</div>
						)}
						<div
							style={{
								display: "grid",
								gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
								gap: "12rem",
							}}
						>
							{products.map((prod) => (
								<Product key={prod._id} product={prod}></Product>
							))}
						</div>
					</div>
				</div>
			</div>

			<section className="pagination">
				<Pagination reducer="product"></Pagination>
			</section>
		</>
	);
};

export default Store;
