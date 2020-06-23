import React from "react";

const Comment = ({ comment }) => {
  return (
    <>
      <div className="comment">
        <div className="comment__user">
          <img alt="Avatar" src="../imgs/avatar.svg" />
        </div>
        <p className="comment__text">{comment.text}</p>
      </div>
    </>
  );
};

export default Comment;
