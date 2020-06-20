import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../redux/actions/postActions";
const PostForm = () => {
  const post = useSelector(state => state.post.post);
  const dispatch = useDispatch();
  const addPost = () => {
    dispatch(addPost(post));
  };

  return (
    <>
      <div className="form__window-body--bg-info">
        <div className="form-container ">
          <form className="form">
            <p className="form__title">fill in post info</p>
            <label className="form__subtitle">title</label>
            <input
              type="text"
              className="input form__input-1 input--text-color-info input--padding-sm input--border-radius-md input--border-info"
              placeholder="post title"
            />

            <label className="form__subtitle">Your steps</label>
            <div style={{ paddingLeft: "2rem" }}>
              <input
                type="text"
                className="input form__input-2 input--text-color-info input--padding-sm input--border-radius-md input--border-info"
                placeholder="What was your preperation step"
              />
              <input
                type="text"
                className="input form__input-2 input--text-color-info input--padding-sm input--border-radius-md input--border-info"
                placeholder="What was your implementation step"
              />

              <input
                type="text"
                className="input form__input-2 input--text-color-info input--padding-sm input--border-radius-md input--border-info"
                placeholder="What was your Result step"
              />
            </div>

            <label className="form__subtitle">add files</label>
            <input
              type="file"
              className="input form__input-1 input--text-color-info input--padding-sm input--border-radius-md input--border-info"
              placeholder="What was your Result step"
              multiple
            />

            <button
              type="submit"
              className="btn btn--rect btn--primary form__btn"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostForm;
