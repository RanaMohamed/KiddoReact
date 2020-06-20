import React from 'react';

const Product = ({ product }) => {
	return (
		<>
			<div className='post-card post-card--bg post-card--bg--primary'>
				<div className='post-card__img'>
					<img alt='Post' src='../img/post1.png' />
				</div>
				<div className='post-card__body'>
					<p className='post-card__title'>{product.post?.title}</p>
					<p>{product.post?.body}</p>
					<div className='post-card__info'>
						<img
							className='post-card__avatar'
							alt='Avatar'
							src='../img/avatar.svg'
						/>
						<div>
							<p>Full name</p>
							<i className='fa fa-heart like-icon'></i>
							<span>20</span>
							<i className='fa fa-comment comment-icon'></i>
							<span>10</span>
						</div>
					</div>
					<div className='post-card__overlay'>
						<button className='btn btn--1 btn--rect'>View Details</button>
						<button className='btn btn--1 btn--rect'>Button2</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Product;
