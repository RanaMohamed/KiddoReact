import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { isEmpty } from "lodash";
import Comment from "./kid/comment";
import { getPostById } from "../redux/actions/postActions";
import { addComment } from "../redux/actions/commentActions";
import { addLike, removeLike } from "../redux/actions/postActions";
const PostDetails = () => {
  const user = useSelector(state => state.user.user);
  const post = useSelector(state => state.post.post);
  const dispatch = useDispatch();
  const params = useParams();
  const [comment, setComment] = useState("");
  useEffect(() => {
    if (params.id) dispatch(getPostById(params.id));
  }, [params.id, comment, post?.likes]);
  const addCommentHandler = async e => {
    e.preventDefault();
    const error = await dispatch(addComment(post._id, comment));
    if (!isEmpty(error)) return;
    setComment("");
  };

  const addLikeHandler = async e => {
    e.preventDefault();
    if (post.likes.some(like => like.user === user?._id)) {
      dispatch(removeLike(post._id));
    } else {
      dispatch(addLike(post._id));
    }
  };

  return (
    <>
      {post && (
        <div className="post-card post-card--lg">
          <div className="post-card__post">
            <div className="post-card__img">
              <img alt="Post" src="../img/post1.png" />
            </div>
            <div className="post-card__body">
              <p className="post-card__title">{post?.title}</p>
              <p className="post-card__description">{post?.body}</p>
              <div className="post-card__info">
                <img
                  className="post-card__avatar"
                  alt="Avatar"
                  src="../img/avatar.svg"
                />
                <div>
                  <p>{post?.authorKid?.username}</p>
                  <i className="fa fa-heart like-icon"></i>
                  <span>{post.likes?.length}</span>
                  <i className="fa fa-comment comment-icon"></i>
                  <span>{post.commentsTotal}</span>
                </div>
              </div>
              <div className="category-card category-card--xs w-20">
                <div className=" category-card--image">
                  <img src="../img/avatar.svg" alt="category" />
                </div>
                <span>{post?.category?.title}</span>
              </div>

              <div style={{ textAlign: "end" }}>
                {!post.isApproved && (
                  <>
                    <button className="btn btn--circle btn--4">
                      {/* Approve button */}
                      <i className="fas fa-times"></i>
                    </button>

                    {/* unApproved button */}
                    <button className="btn btn--circle">
                      <i className="fas fa-check"></i>
                    </button>
                  </>
                )}
                {/* Like button  */}
                {post.isApproved && (
                  <button onClick={addLikeHandler} className="btn btn--circle">
                    {!post.likes?.some(like => like.user === user?._id) ? (
                      <i className="fa fa-heart"></i>
                    ) : (
                      <i class="far fa-thumbs-down"></i>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
          {post.isApproved && (
            <div className="comments">
              <h2>Comments</h2>
              {post.comments?.map(comment => (
                <Comment key={comment._id} comment={comment}></Comment>
              ))}

              <form onSubmit={addCommentHandler}>
                <input
                  type="text"
                  className="input input--text-color-primary input--comment input--border-dark input--padding-xs input--border-radius-xl"
                  placeholder="Add a comment...."
                  value={comment}
                  onChange={e => setComment(e.target.value)}
                />
              </form>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default PostDetails;
