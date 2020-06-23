import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getApprovedPosts } from "../redux/actions/postActions";

import Post from "./../components/post";

const LatestPosts = () => {
	const posts = useSelector((state) => state.post.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getApprovedPosts(1, 3));
	}, []);

	return (
		<>
			<section>
				<h2>LatestPosts</h2>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
						gap: "12rem",
					}}
				>
					{posts?.map((post) => (
						<Post key={post._id} post={post} />
					))}
				</div>
			</section>
		</>
	);
};

export default LatestPosts;
