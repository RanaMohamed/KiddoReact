import React, { useEffect } from 'react';
import Product from './product';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productAction';
import Pagination from '../pagination';

const Store = () => {
	const products = useSelector((state) => state.product.products);
	const currentPage = useSelector((state) => state.product.currentPage);
	const perPage = useSelector((state) => state.product.perPage);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts(currentPage, perPage));
	}, [currentPage]);

	return (
		<>
			<div
				className='store'
				style={{
					margin: '2rem auto',
				}}
			>
				<h2>Store</h2>
				<input
					type='search'
					className='input input--text-color-primary input--border-primary input--padding-xs input--border-radius-md input--bg-info'
					placeholder='search ...'
				/>
			</div>
			<div className='container'>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'auto auto auto',
						gap: '12rem',
					}}
				>
					{products?.map((prod) => (
						<Product key={prod._id} product={prod}></Product>
					))}
				</div>
			</div>

			<section className='pagination'>
				<Pagination reducer='product'></Pagination>
			</section>
		</>
	);
};

export default Store;
