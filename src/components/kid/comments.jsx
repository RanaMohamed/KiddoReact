import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getComments } from '../../redux/actions/commentActions';

const Comments = ({ postId, limit }) => {
	const comments = useSelector((state) => state.comment.comments);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getComments(postId));
	}, []);
	return (
		<>
			{comments?.map((comment) => (
				<div key={comment._id} className='comment'>
					<div className='comment__user'>
						<img alt='Avatar' src='../img/avatar.svg' />
					</div>
					<p className='comment__text'>{comment.text}</p>
				</div>
			))}
		</>
	);
};

export default Comments;
