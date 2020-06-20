import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeNameAction } from '../redux/actions/userActions';

const TestRedux = () => {
	const user = useSelector((state) => state.user.user);
	const dispatch = useDispatch();

	const changeName = () => {
		dispatch(changeNameAction('Msh Hamada'));
	};
	return (
		<>
			<h1>{user.name}</h1>
			<button onClick={changeName}>change Name</button>
		</>
	);
};

export default TestRedux;
