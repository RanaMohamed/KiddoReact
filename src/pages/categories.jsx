import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Category from "../components/category";
import Pagination from "./../components/pagination";

import { getApprovedPosts } from "../redux/actions/postActions";

import Post from "./../components/post";

const Categories = () => {
  const Posts = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApprovedPosts(1, 4));
  }, []);

  return (
    <React.Fragment>
      <Category></Category>
      <section className="my-lg">
        <h2>Posts</h2>
        <div className="container my-xl">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto auto",
              gap: "12rem",
            }}
          >
            {Posts?.map((post) => (
              <Post key={post._id} post={post}></Post>
            ))}
          </div>
        </div>
      </section>
      <Pagination reducer="product"></Pagination>
    </React.Fragment>
  );
};

export default Categories;
