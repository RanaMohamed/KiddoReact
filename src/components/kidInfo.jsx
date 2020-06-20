import React from 'react';

const KidInfo = ({ profile }) => {
	return (
		<div className='profile-card profile-card--display-flex'>
			<div className='profile-card__part-lg '>
				<p className='profile-card__title'>about</p>
				<p>
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
					nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
					sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
					rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
					ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
				</p>
				<p className='profile-card__title'>interests</p>
				<div className='categories' style={{ display: 'flex' }}>
					{profile?.categories?.map((cat) => (
						<div key={cat._id} className='category-card category-card--xs'>
							<div className=' category-card--image'>
								<img src='./img/avatar.svg' alt='kid' />
							</div>
						</div>
					))}
				</div>
			</div>
			<div className='profile-card__part-sm'>
				{/* Badges for test */}
				<div>
					<i className='fas fa-certificate badge'></i>
					<i className='fas fa-certificate badge badge--2'></i>
					<i className='fas fa-certificate badge badge--1'></i>
				</div>
				<div
					style={{
						marginTop: '6rem',
					}}
				>
					<button className='btn btn--rect btn--1 btn--xs'>
						<i className='far fa-edit'></i> New Post
					</button>
					<button className='btn btn--rect btn--1 btn--xs'>
						<i className='fas fa-coins'></i> Buy Coins
					</button>
				</div>
			</div>
			<div className='profile-card__edit  btn btn--circle btn--4'>
				<i className='fas fa-pen'></i>
			</div>
		</div>
	);
};

export default KidInfo;
