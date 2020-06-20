import React from 'react';
import Comments from './kid/comments';
import { useState } from 'react';
import { isEmpty } from 'lodash';
import { useDispatch } from 'react-redux';
import { addComment } from '../redux/actions/commentActions';
import Comment from './kid/comment';

const PostWithComments = ({ post }) => {
	const [comment, setComment] = useState('');
	const dispatch = useDispatch();
	const addCommentHandler = async (e) => {
		e.preventDefault();
		const error = await dispatch(addComment(post._id, comment));

		if (!isEmpty(error)) return;

		setComment('');
	};
	return (
		<>
			<div className='post-card post-card--md my-md'>
				<div className='post-card__post w-50'>
					<div className='post-card__img'>
						<img alt='Post' src='../img/post1.png' />
					</div>
					<div className='post-card__body'>
						<p className='post-card__title'>{post.title}</p>
						<p>{post.body}</p>
						<div className='post-card__info'>
							<img
								className='post-card__avatar'
								alt='Avatar'
								src='../img/avatar.svg'
							/>
							<div>
								<p>{post.authorKid?.username}</p>
								<i className='fa fa-heart like-icon'></i>
								<span>{post.likes?.length}</span>
								<i className='fa fa-comment comment-icon'></i>
								<span>{post.commentsTotal}</span>
							</div>
						</div>
						<div className='post-card__overlay'>
							<button className='btn btn--1 btn--rect'>View Details</button>
							<button className='btn btn--1 btn--rect'>Button2</button>
						</div>
					</div>
				</div>
				<div className='comments w-50'>
					<h2>Comments</h2>
					{post.comments.map((comment) => (
						<Comment key={comment._id} comment={comment}></Comment>
					))}
					<form onSubmit={addCommentHandler}>
						<input
							type='text'
							className='input input--text-color-primary input--comment input--border-dark input--padding-xs input--border-radius-xl'
							placeholder='Add a comment....'
							value={comment}
							onChange={(e) => setComment(e.target.value)}
						/>
					</form>
				</div>
			</div>
		</>
	);
};

export default PostWithComments;
