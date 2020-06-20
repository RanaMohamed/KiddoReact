import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as _ from 'lodash';

import { loginSchema } from '../../helpers/schemas';
import { loginSupporter } from '../../redux/actions/userActions';

const LoginSupporter = () => {
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

		const errorRes = await dispatch(loginSupporter(user));
		if (!_.isEmpty(errorRes)) {
			setErrors(errorRes);
			return;
		}

		history.replace('/');
	};
	return (
		<>
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
					className={'btn btn--primary btn--rect' + (loading ? ' loading' : '')}
				>
					{!loading && 'Join'}
				</button>
			</form>
		</>
	);
};

export default LoginSupporter;
