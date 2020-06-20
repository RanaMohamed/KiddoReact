import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "./../redux/actions/categoryActions";
import Pagination from "./pagination";

const Category = () => {
  const categories = useSelector((state) => state.categories.categories);
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <>
      <div>
        {categories?.map((category) => (
          <section className="category-section">
            <div className="category-card category-card--sm" key={category._id}>
              <div className=" category-card--image">
                <img src={category.image} alt="Category Image" />
              </div>
              <div className="category-card--title">{category.title}</div>
            </div>
          </section>
        ))}
        <section className="post-section"></section>
      </div>
      <section className="pagination">
        <Pagination reducer="product"></Pagination>
      </section>
    </>
  );
};

export default Category;
