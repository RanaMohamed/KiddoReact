import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as _ from 'lodash';

import { loginSchema } from '../../helpers/schemas';
import { loginBuyer } from '../../redux/actions/userActions';

const LoginBuyer = () => {
	const [user, setUser] = useState({
		username: '',
		password: '',
	});
	const [errors, setErrors] = useState({});

	const loading = useSelector((state) => state.request.pending);

	const dispatch = useDispatch();
	const history = useHistory();

	const submitHandler = async (e) => {
		e.preventDefault();
		const { error } = loginSchema.validate(user, { abortEarly: false });
		if (error) {
			const err = _.keyBy(error.details, (e) => e.context.label);
			setErrors(err);
			return;
		}

		const errorRes = await dispatch(loginBuyer(user));
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
					<Link to='/buyer/signup' className='btn btn--rect btn--light'>
						Signup
					</Link>
					<Link to='/buyer/login' className='btn btn--rect btn--1'>
						Login
					</Link>

					<h1 className='w-70'>Fill Your Info to enter</h1>
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

export default LoginBuyer;
