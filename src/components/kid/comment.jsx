import React from 'react';

const Comment = ({ comment }) => {
	return (
		<>
			<div className='comment'>
				<div className='comment__user'>
					<img alt='Avatar' src='../img/avatar.svg' />
				</div>
				<p className='comment__text'>{comment.text}</p>
			</div>
		</>
	);
};

export default Comment;
