import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getApprovedPosts } from "../redux/actions/postActions";

import Post from "./../components/post";

const PostsList = () => {
  const Posts = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApprovedPosts(1, 9));
  }, []);

  return (
    <>
      <section className="my-lg">
        <div className="container my-xl">
          <h2>Posts</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto auto",
              gap: "12rem",
            }}
          >
            {Posts?.filter(
              (post) => post.category.title === "Arts & Crafts"
            ).map((post) => (
              <Post key={post._id} post={post}></Post>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PostsList;
