import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getComments } from '../../redux/actions/commentActions';
import Comment from './comment';

const Comments = ({ postId }) => {
	const comments = useSelector((state) => state.comment.comments);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getComments(postId));
	}, []);
	return (
		<>
			{comments?.map((comment) => (
				<Comment key={comment._id} comment={comment}></Comment>
			))}
		</>
	);
};

export default Comments;
