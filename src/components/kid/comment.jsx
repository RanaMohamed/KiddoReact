import React from "react";
import { Link } from "react-router-dom";

const Comment = ({ comment }) => {
	return (
		<>
			<div className="comment">
				<div className="comment__user">
					<img alt="Avatar" src={process.env.PUBLIC_URL + "/imgs/avatar.svg"} />
				</div>
				<div className="comment__text">
					<p className="comment__username">
						<Link
							to={
								(comment.user.email ? "/supporter" : "/kid") +
								`/${comment.user?._id}`
							}
						>
							{comment.user?.username}
						</Link>
					</p>
					<p>{comment.text}</p>
				</div>
			</div>
		</>
	);
};

export default Comment;
