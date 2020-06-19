import React from 'react';

const SupporterInfo = () => {
	return (
		<>
			{' '}
			<div className='profile-card profile-card--display-flex'>
				<div className='profile-card__part-lg profile-card__part-lg--after '>
					<p className='profile-card__title'>about</p>
					<p>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
						nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
						erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
						et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
						Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
					</p>
					<p className='profile-card__title'>categories</p>
					<div className='categories' style={{ display: 'flex' }}>
						<div className='category-card category-card--xs'>
							<div className=' category-card--image'>
								<img src='./img/avatar.svg' alt='kid' />
							</div>
						</div>
						<div className='category-card category-card--xs'>
							<div className=' category-card--image'>
								<img src='./img/avatar.svg' alt='kid' />
							</div>
						</div>
					</div>
				</div>
				<div className='profile-card__part-sm'>
					<i className='fas fa-briefcase  profile-card__icon-lg'></i>
					<p className='profile-card__text-secondary'>math teacher</p>
					<i className='fas fa-envelope profile-card__icon-lg'></i>
					<p className='profile-card__text-secondary'>amal@gmail.com</p>
				</div>
				<div className='profile-card__edit btn btn--circle btn--4'>
					<i className='fas fa-pen'></i>
				</div>
			</div>
		</>
	);
};

export default SupporterInfo;
