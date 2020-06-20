import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../redux/actions/postActions";
const PostForm = () => {
  const post = useSelector(state => state.post.post);
  const dispatch = useDispatch();
  const addPost = () => {
    dispatch(addPost(post));
  };

  return <></>;
};

export default PostForm;
