import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "./../redux/actions/categoryActions";

const Category = () => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <>
      <section className="category-section">
        {categories?.map((category) => (
          <div className="category-card category-card--sm" key={category._id}>
            <div className=" category-card--image">
              <img src={category.image} alt="Category Image" />
            </div>
            <div className="category-card--title">{category.title}</div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Category;
