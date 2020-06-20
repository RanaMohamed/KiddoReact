import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as _ from 'lodash';

import { buyerSignupSchema } from '../../helpers/schemas';
import { signupBuyer } from '../../redux/actions/userActions';

const SignupBuyer = () => {
	const [user, setUser] = useState({
		username: '',
		password: '',
		email: '',
		dateOfBirth: '',
		phone: '',
		address: '',
	});
	const [errors, setErrors] = useState({});

	const loading = useSelector((state) => state.request.pending);

	const dispatch = useDispatch();
	const history = useHistory();

	const submitHandler = async (e) => {
		e.preventDefault();
		const { error } = buyerSignupSchema.validate(user, {
			abortEarly: false,
		});
		if (error) {
			const err = _.keyBy(error.details, (e) => e.context.label);
			setErrors(err);
			return;
		}

		const errorRes = await dispatch(signupBuyer(user));
		if (!_.isEmpty(errorRes)) {
			setErrors(errorRes);
			return;
		}

		history.replace('/');
	};
	return (
		<>
			<div className='container d-flex h-100-vh align-items-center'>
				<div className='w-50'>
					<Link to='/buyer/signup' className='btn btn--rect btn--1'>
						Signup
					</Link>
					<Link to='/buyer/login' className='btn btn--rect btn--light'>
						Login
					</Link>

					<h1 className='w-70'>Fill the form to be part of the community</h1>
				</div>
				<div className='w-50 bg--2'>
					<form action='' className='form p-xl' onSubmit={submitHandler}>
						<label htmlFor='username'>Username</label>
						<input
							id='username'
							type='text'
							className='input --text-color-primary input--padding-sm input--border-radius-md'
							placeholder='Username'
							value={user.username}
							onChange={(e) => setUser({ ...user, username: e.target.value })}
						></input>
						<span className='error-message'>{errors.username?.message}</span>

						<label htmlFor='password'>Password</label>
						<input
							id='password'
							type='password'
							className='input --text-color-primary input--padding-sm input--border-radius-md'
							placeholder='Password'
							value={user.password}
							onChange={(e) => setUser({ ...user, password: e.target.value })}
						></input>
						<span className='error-message'>{errors.password?.message}</span>

						<label htmlFor='dateOfBirth'>Date of birth</label>
						<input
							id='dateOfBirth'
							type='date'
							className='input --text-color-primary input--padding-sm input--border-radius-md'
							placeholder='Date of birth'
							value={user.dateOfBirth}
							onChange={(e) =>
								setUser({ ...user, dateOfBirth: e.target.value })
							}
						></input>
						<span className='error-message'>{errors.dateOfBirth?.message}</span>

						<label htmlFor='email'>Email</label>
						<input
							id='email'
							type='text'
							className='input --text-color-primary input--padding-sm input--border-radius-md'
							placeholder='Email'
							value={user.email}
							onChange={(e) => setUser({ ...user, email: e.target.value })}
						></input>
						<span className='error-message'>{errors.email?.message}</span>

						<label htmlFor='phone'>Phone</label>
						<input
							id='phone'
							type='text'
							className='input --text-color-primary input--padding-sm input--border-radius-md'
							placeholder='Phone'
							value={user.phone}
							onChange={(e) => setUser({ ...user, phone: e.target.value })}
						></input>
						<span className='error-message'>{errors.phone?.message}</span>

						<label htmlFor='address'>Address</label>
						<input
							id='address'
							type='text'
							className='input --text-color-primary input--padding-sm input--border-radius-md'
							placeholder='Address'
							value={user.address}
							onChange={(e) => setUser({ ...user, address: e.target.value })}
						></input>
						<span className='error-message'>{errors.address?.message}</span>

						<button
							type='submit'
							className={
								'btn btn--primary btn--rect' + (loading ? ' loading' : '')
							}
						>
							{!loading && 'Join'}
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default SignupBuyer;
