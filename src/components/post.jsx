import React from "react";

const Post = ({ post }) => {
  return (
    <>
      <div className="post-card post-card--bg post-card--bg--primary">
        <div className="post-card__img">
          <img alt="Post" src="../img/post1.png" />
        </div>
        <div className="post-card__body">
          <p className="post-card__title">{post?.title}</p>
          <p>{post?.body}</p>
          <div className="post-card__info">
            <img
              className="post-card__avatar"
              alt="Avatar"
              src="../img/avatar.svg"
            />
            <div>
              <p>{post?.authorKid?.username}</p>
              <i className="fa fa-heart like-icon"></i>
              <span>0</span>
              <i className="fa fa-comment comment-icon"></i>
              <span>0</span>
            </div>
          </div>
          <div className="post-card__overlay">
            <button className="btn btn--1 btn--rect">View Details</button>
            <button className="btn btn--1 btn--rect">Button2</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
