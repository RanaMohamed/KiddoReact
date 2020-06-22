import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getApprovedPosts } from "../redux/actions/postActions";

import Post from "./../components/post";

const LatestPosts = () => {
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
      <section>
        <h2>LatestPosts</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            gap: "12rem",
          }}
        >
          {posts?.slice(Math.max(posts.length - 3, 0)).map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </div>
      </section>
    </>
  );
};

export default LatestPosts;
