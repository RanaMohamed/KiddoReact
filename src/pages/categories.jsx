import React from "react";
import Category from "../components/category";
import Pagination from "./../components/pagination";
import PostsList from "./../components/postslist";

const Categories = () => {
  return (
    <>
      <Category></Category>
      <PostsList></PostsList>
      <Pagination reducer="post"></Pagination>
    </>
  );
};

export default Categories;
