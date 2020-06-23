import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { isEmpty } from "lodash";
import Comment from "./kid/comment";
import { getPostById } from "../redux/actions/postActions";
import { addComment } from "../redux/actions/commentActions";
import { addLike, removeLike, approvePost } from "../redux/actions/postActions";
import renderPostBody from "../helpers/renderPostBody";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const PostDetails = () => {
	const user = useSelector((state) => state.user.user);
	const type = useSelector((state) => state.user.type);
	const post = useSelector((state) => state.post.post);
	const history = useHistory();
	const dispatch = useDispatch();
	const params = useParams();
	const [comment, setComment] = useState("");
	const [like, setLike] = useState(false);
	const [approve, setApprove] = useState(false);
	useEffect(() => {
		if (params.id) dispatch(getPostById(params.id));
	}, [params.id, comment, like, approve, dispatch]);
	const addCommentHandler = async (e) => {
		e.preventDefault();
		const error = await dispatch(addComment(post._id, comment));
		if (!isEmpty(error)) return;
		setComment("");
	};

	const addLikeHandler = async () => {
		if (post.likes.some((like) => like.user === user?._id)) {
			await dispatch(removeLike(post._id));
			setLike(false);
		} else {
			await dispatch(addLike(post._id));
			setLike(true);
		}
	};

	const approvePostHandler = async (e) => {
		e.preventDefault();
		const error = await dispatch(approvePost(post._id));
		if (!isEmpty(error)) return;
		setApprove(true);
	};

	return (
		<>
			<div className="container">
				{post && (
					<div className="post-card post-card--lg">
						<div className="post-card__post">
							<div className="post-card__img">
								<img
									alt="Post"
									src={
										post && post.attachedFiles && post.attachedFiles.length > 0
											? post.attachedFiles[0]
											: process.env.PUBLIC_URL + "/imgs/post1.png"
									}
								/>
							</div>
							<div className="post-card__body">
								<p className="post-card__title">{post?.title}</p>
								<div className="post-card__description post-card__description__full">
									{renderPostBody(post?.body)}
								</div>
								<div className="post-card__info">
									<img
										className="post-card__avatar"
										alt="Avatar"
										src={process.env.PUBLIC_URL + "/imgs/avatar.svg"}
									/>
									<div>
										<p>
											<Link to={`/kid/${post?.authorKid?._id}`}>
												{post?.authorKid?.username}
											</Link>
										</p>
										<i className="fa fa-heart like-icon"></i>
										<span>{post.likes?.length}</span>
										<i className="fa fa-comment comment-icon"></i>
										<span>{post.commentsTotal}</span>
									</div>
								</div>
								<div className="category-card category-card--xs w-20">
									<div className=" category-card--image">
										<img src={post?.category?.image} alt="category" />
									</div>
									<span>{post?.category?.title}</span>
								</div>

								<div style={{ textAlign: "end" }}>
									{!post.isApproved && type === "Supporter" && (
										<>
											<button className="btn btn--circle btn--4">
												{/* Approve button */}
												<i className="fas fa-times"></i>
											</button>

											{/* unApproved button */}
											<button
												onClick={approvePostHandler}
												className="btn btn--circle"
											>
												<i className="fas fa-check"></i>
											</button>
										</>
									)}
									{/* Like button  */}
									{post.isApproved && (
										<button
											onClick={() => {
												user ? addLikeHandler() : history.push("/kid/login");
											}}
											className="btn btn--circle"
										>
											{!post.likes?.some((like) => like.user === user?._id) ? (
												<i className="fa fa-heart"></i>
											) : (
												<i className="far fa-thumbs-down"></i>
											)}
										</button>
									)}
								</div>
							</div>
						</div>
						{post.attachedFiles && post.attachedFiles.length > 0 && (
							<div className="comments">
								<h2>Files</h2>
								<div
									style={{
										display: "grid",
										gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
										gridGap: "2rem 12rem",
									}}
								>
									{post.attachedFiles?.map((file) => (
										<a key={file} href={file} download>
											{file}
										</a>
									))}
								</div>
							</div>
						)}
						{post.isApproved && (
							<div className="comments">
								<h2>Comments</h2>
								{post.comments?.map((comment) => (
									<Comment key={comment._id} comment={comment}></Comment>
								))}

								<form
									onSubmit={(e) => {
										user ? addCommentHandler(e) : history.push("/kid/login");
									}}
								>
									<input
										type="text"
										className="input input--text-color-primary input--comment input--border-dark input--padding-xs input--border-radius-xl"
										placeholder="Add a comment...."
										value={comment}
										onChange={(e) => setComment(e.target.value)}
									/>
								</form>
							</div>
						)}
					</div>
				)}
			</div>
		</>
	);
};

export default PostDetails;
