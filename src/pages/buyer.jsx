import React from 'react';
import LoginBuyer from '../components/buyer/login';
import SignupBuyer from '../components/buyer/signup';
import { useState } from 'react';

const Buyer = () => {
	const [login, setLogin] = useState(true);

	return (
		<>
			<div className='container d-flex h-100-vh align-items-center'>
				<div className='w-50'>
					<button
						className={'btn btn--rect' + (login ? ' btn--light' : ' btn--1')}
						onClick={() => setLogin(false)}
					>
						Signup
					</button>
					<button
						className={'btn btn--rect' + (!login ? ' btn--light' : ' btn--1')}
						onClick={() => setLogin(false)}
					>
						Login
					</button>

					<h1 className='w-70'>
						{login
							? 'Fill Your Info to enter'
							: 'Fill the form to be part of the community'}
					</h1>
				</div>
				<div className='w-50 bg--2'>
					{login ? <LoginBuyer></LoginBuyer> : <SignupBuyer></SignupBuyer>}
				</div>
			</div>
		</>
	);
};

export default Buyer;
