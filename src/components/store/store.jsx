import React, { useEffect, useState } from "react";
import Product from "./product";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, searchProduct } from "../../redux/actions/productAction";
import Pagination from "../pagination";

const Store = () => {
	const products = useSelector((state) => state.product.products);

	const loading = useSelector((state) => state.request.pending);

	const currentPage = useSelector((state) => state.product.currentPage);
	const perPage = useSelector((state) => state.product.perPage);
	const [searchText, setsearchText] = useState({ searchText: "" });

	const dispatch = useDispatch();

	useEffect(() => {
		if (searchText.searchText) dispatch(searchProduct(searchText.searchText));
		else dispatch(getProducts(currentPage, perPage));
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
			{loading && (
				<div className="text-center">
					<span className="btn btn--1 btn--rect loading"></span>
				</div>
			)}

			<div className="container">
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

			<section className="pagination">
				<Pagination reducer="product"></Pagination>
			</section>
		</>
	);
};

export default Store;
