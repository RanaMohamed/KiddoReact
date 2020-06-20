import React from 'react';

const PostWithComments = () => {
	return (
		<>
			<div className='post-card post-card--md'>
				<div className='post-card__post'>
					<div className='post-card__img'>
						<img alt='Post' src='../img/post1.png' />
					</div>
					<div className='post-card__body'>
						<p className='post-card__title'>Post 1</p>
						<p>
							Lorem ipsum dolor sit amet, vel id nusquam repudiandae
							interpretaris, eam an quem pericula. Mei te aliquid mediocritatem.
							Sint rebum repudiandae vel ei. In mollis fuisset fierent pro,
							habemus dolores tincidunt ad nam. Vis laudem nostrud ex, augue
							errem indoctum ea eam.
						</p>
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
				<div className='comments'>
					<h2>Comments</h2>
					<div className='comment'>
						<div className='comment__user'>
							<img alt='Avatar' src='../img/avatar.svg' />
						</div>
						<p className='comment__text'>
							Lorem ipsum dolor sit amet, vel id nusquam repudiandae
							interpretaris, eam an quem pericula. Mei te aliquid mediocritatem.
							Sint rebum repudiandae vel ei. In mollis fuisset fierent pro,
							habemus dolores tincidunt ad nam. Vis laudem nostrud ex, augue
							errem indoctum ea eam.
						</p>
					</div>
					<div className='comment'>
						<div className='comment__user'>
							<img alt='Avatar' src='../img/avatar.svg' />
						</div>
						<p className='comment__text'>
							Lorem ipsum dolor sit amet, vel id nusquam repudiandae
							interpretaris, eam an quem pericula. Mei te aliquid mediocritatem.
							Sint rebum repudiandae vel ei. In mollis fuisset fierent pro,
							habemus dolores tincidunt ad nam. Vis laudem nostrud ex, augue
							errem indoctum ea eam.
						</p>
					</div>
					<div>
						<input
							type='text'
							className='input input--text-color-primary input--comment input--border-dark input--padding-xs input--border-radius-xl'
							placeholder='Add a comment....'
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default PostWithComments;
