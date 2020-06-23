import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getApprovedPosts } from "../redux/actions/postActions";

import Post from "./../components/post";

const PostsList = () => {
	const posts = useSelector((state) => state.post.posts);
	const currentPage = useSelector((state) => state.post.currentPage);
	const perPage = useSelector((state) => state.post.perPage);
	const [selectedCategory] = useSelector(
		(state) => state.categories.selectedCategory
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getApprovedPosts(currentPage, perPage, selectedCategory));
	}, [currentPage, perPage, selectedCategory]);

	return (
		<>
			<section className="my-lg">
				<div className="container my-xl">
					<h2>Posts</h2>
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
							gap: "12rem",
						}}
					>
						{posts?.map((post) => (
							<Post key={post._id} post={post}></Post>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default PostsList;
