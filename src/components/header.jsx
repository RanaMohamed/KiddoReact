import React from 'react';

const Header = () => {
	return (
		<>
			<header>
				<nav className='nav'>
					<h1>Kiddo</h1>
					<ul className='nav-ul'>
						<li>
							<a href='#a'> Home</a>
						</li>
						<li>
							<a href='#a'>Categories</a>
						</li>
						<li>
							<a href='#a'>Store</a>
						</li>
						<li>
							<a href='#a'>About</a>
						</li>
						<li>
							<a href='#a'>Contact</a>
						</li>
						<li>
							<a href='#f'>
								<i className='fas fa-search'></i>
							</a>
						</li>
						<li>
							<a href='#noto'>
								<i className='far fa-bell'></i>
							</a>
						</li>
						<li>
							{/*  */}
							<div className='dropdown dropdown--active'>
								<a href='/' className='nav__img'>
									<img src='./img/avatar.svg' alt='kid' />
								</a>
								<div className='dropdown__menu'>
									<div className='dropdown__arrowup'></div>
									<ul className='dropdown dropdown__list'>
										<li className='dropdown dropdown__item'>
											<a href='/'>
												<i className='fa fa-heart'></i> My Profile
											</a>
										</li>
										<li className='dropdown dropdown__item'>
											<a href='/'>
												<i className='fa fa-heart'></i> Logout
											</a>
										</li>
									</ul>
								</div>
							</div>
						</li>
						<li>
							<a href='#lang'>EN</a>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Header;
