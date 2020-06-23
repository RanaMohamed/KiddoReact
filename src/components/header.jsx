import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/userActions";

const Header = () => {
	const [active, setactive] = useState({ active: false });
	const user = useSelector((state) => state.user.user);
	const type = useSelector((state) => state.user.type);

	const dispatch = useDispatch();
	const location = useLocation();

	const logoutHandler = (e) => {
		e.preventDefault();
		dispatch(logout());
	};

	return (
		<>
			<header>
				<div className="container">
					<nav className="nav">
						<h1>
							<Link to="/">Kiddo</Link>
						</h1>
						{location.pathname.indexOf("login") === -1 && (
							<ul className="nav-ul">
								<li>
									<Link className="nav__link" to="/">
										Home
									</Link>
								</li>
								<li>
									<Link className="nav__link" to="/categories">
										Categories
									</Link>
								</li>
								<li>
									<Link className="nav__link" to="/store">
										Store
									</Link>
								</li>
								<li>
									<Link className="nav__link" to="/about">
										About
									</Link>
								</li>
								<li>
									<Link className="nav__link" to="/contact">
										Contact
									</Link>
								</li>
								{/* <li>
							<a href='#f' className='nav__link'>
								<i className='fas fa-search'></i>
							</a>
						</li>
						<li>
							<a href='#noto' className='nav__link'>
								<i className='far fa-bell'></i>
							</a>
						</li> */}
								<li>
									{user ? (
										<div className="dropdown dropdown--active">
											<span className="nav__img">
												<img
													src={process.env.PUBLIC_URL + "/imgs/avatar.svg"}
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
												<div className="dropdown__menu">
													<div className="dropdown__arrowup"></div>
													<ul className="dropdown dropdown__list">
														<li className="dropdown dropdown__item">
															<Link
																to={
																	(type === "Kid"
																		? "/kid"
																		: type === "Supporter"
																		? "/supporter"
																		: "/buyer") + `/${user._id}`
																}
															>
																<i className="fa fa-user"></i> My Profile
															</Link>
														</li>
														<li className="dropdown dropdown__item">
															<a href="/" onClick={logoutHandler}>
																<i className="fas fa-sign-out-alt"></i> Logout
															</a>
														</li>
													</ul>
												</div>
											)}
										</div>
									) : (
										<Link to="/kid/login" className="nav__link">
											Login
										</Link>
									)}
								</li>
								<li>
									<a href="#lang" className="nav__link">
										EN
									</a>
								</li>
							</ul>
						)}
					</nav>
				</div>
			</header>
		</>
	);
};

export default Header;
