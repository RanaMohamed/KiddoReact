import React from 'react';

const BuyerInfo = () => {
	return (
		<>
			<div className='profile-card'>
				<div className='profile-card--display-flex'>
					<span className='profile-card__title'>
						<i className='fas fa-envelope profile-card__icon-sm '></i>Email
					</span>
					<p className='profile-card__text-primary--1'>buyer@gmail.com</p>
				</div>
				<div className='profile-card--display-flex'>
					<span className='profile-card__title'>
						<i className='fas fa-map-marker profile-card__icon-sm '></i>
						Address
					</span>
					<p className='profile-card__text-primary--2'>6 October</p>
				</div>
				<div className='profile-card--display-flex'>
					<span className='profile-card__title'>
						<i className='fas fa-phone-alt  profile-card__icon-sm '></i>
						phone
					</span>
					<p className='profile-card__text-primary--1'>01020304050</p>
				</div>

				<div className='profile-card__edit btn btn--circle btn--4'>
					<i className='fas fa-pen'></i>
				</div>
			</div>
		</>
	);
};

export default BuyerInfo;
