import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<>
			<div className='footer footer--primary'>
				<div className='footer__inner'>
					<div className='footer__signature'>
						<div className='footer__Logo'>KIDDO</div>
						<div className='footer__license'>© Kiddo.com 2020</div>
					</div>

					<div className='footer__third'>
						<Link to='/supporter/signup'>Join as Supporter</Link>
						<a href='/'> About Us</a>
						<a href='/'> Contact</a>
					</div>
					<div className='footer__third'>
						<a href='/'>
							<i className='fab fa-facebook'></i> Facebook
						</a>
						<a href='/'>
							<i className='fab fa-twitter'></i> Twitter
						</a>
						<a href='/'>
							<i className='fab fa-instagram'></i> Instgram
						</a>
					</div>
					<div className='footer__third'>
						<a href='/'> Privacy Policy</a>
						<a href='/'> Terms &amp; condition</a>
						<a href='/'> FAQs</a>
					</div>
					<div className='footer__third'>
						<span>Subscribe to our newsletter</span>
						<input
							type='text'
							className='input input--text-color-primary input--comment input--border-primary input--padding-xs input--border-radius-sm'
							placeholder='Enter your Email Address'
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
