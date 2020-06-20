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
				<Pagination reducer='product'></Pagination>
			</div>
		</>
	);
};

export default Store;
