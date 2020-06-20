import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import PostWithComments from '../postWithComments';
import Pagination from '../pagination';
import { getKidPosts } from '../../redux/actions/postActions';

const Posts = () => {
	const posts = useSelector((state) => state.post.posts);
	const currentPage = useSelector((state) => state.post.currentPage);
	const perPage = useSelector((state) => state.post.perPage);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getKidPosts('5eedc5d158f6107e3811f359', currentPage, perPage));
	}, [currentPage]);
	return (
		<>
			{posts?.map((post) => (
				<PostWithComments key={post._id} post={post}></PostWithComments>
			))}
			<Pagination reducer='post'></Pagination>
		</>
	);
};

export default Posts;
