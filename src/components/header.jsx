import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
	const [active, setactive] = useState({ active: false });
	const user = useSelector((state) => state.user.user);
	const type = useSelector((state) => state.user.type);

	return (
		<>
			<header>
				<nav className='nav'>
					<h1>Kiddo</h1>
					<ul className='nav-ul'>
						<li>
							<Link to='/'> Home</Link>
						</li>
						<li>
							<Link to='/categories'>Categories</Link>
						</li>
						<li>
							<Link to='/store'>Store</Link>
						</li>
						<li>
							<Link to='/about'>About</Link>
						</li>
						<li>
							<Link to='/contact'>Contact</Link>
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
							{user ? (
								<div className='dropdown dropdown--active'>
									<span className='nav__img'>
										<img
											src='./img/avatar.svg'
											alt={type}
											onClick={() =>
												setactive({
													active: active.active === true ? false : true,
												})
											}
										/>
									</span>
									{/* dropdown */}

									{active.active && (
										<div className='dropdown__menu'>
											<div className='dropdown__arrowup'></div>
											<ul className='dropdown dropdown__list'>
												<li className='dropdown dropdown__item'>
													<Link
														to={
															(type === 'Kid'
																? '/kid'
																: type === 'Supporter'
																? '/supporter'
																: 'buyer') + `/${user._id}`
														}
													>
														<i className='fa fa-user'></i> My Profile
													</Link>
												</li>
												<li className='dropdown dropdown__item'>
													<a href='/'>
														<i className='fas fa-sign-out-alt'></i> Logout
													</a>
												</li>
											</ul>
										</div>
									)}
								</div>
							) : (
								<Link to='/kid/login'>Login</Link>
							)}
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
