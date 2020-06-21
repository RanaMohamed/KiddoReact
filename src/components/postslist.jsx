import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getApprovedPosts } from "../redux/actions/postActions";

import Post from "./../components/post";

const PostsList = () => {
  const posts = useSelector((state) => state.post.posts);
  const [selectedCategory] = useSelector(
    (state) => state.categories.selectedCategory
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApprovedPosts(1, 9, selectedCategory));
  }, [selectedCategory]);

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
