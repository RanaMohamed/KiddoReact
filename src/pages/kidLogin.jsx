import React from 'react';
import { useState } from 'react';
import LoginKid from '../components/kid/login';
import SignupKid from '../components/kid/signup';

const KidLogin = () => {
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
					{login ? <LoginKid></LoginKid> : <SignupKid></SignupKid>}
				</div>
			</div>
		</>
	);
};

export default KidLogin;
