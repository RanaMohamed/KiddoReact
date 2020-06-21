import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCategories,
  selectCategory,
} from "./../redux/actions/categoryActions";

const Category = () => {
  const categories = useSelector((state) => state.categories.categories);
  const [selectedCategory] = useSelector(
    (state) => state.categories.selectedCategory
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const selectCategoryHandler = (id) => {
    dispatch(selectCategory(id));
  };

  return (
    <>
      <section className="category-section">
        <div className="container">
          <h2>Categories</h2>
          <div className="d-flex justify-content-between align-items-center">
            <i className="fa fa-arrow-left"></i>
            {categories?.map((category) => (
              <div
                className={
                  "category-card category-card--sm" +
                  (selectedCategory === category._id
                    ? " category-card--primary"
                    : "")
                }
                key={category._id}
                onClick={() => selectCategoryHandler(category._id)}
              >
                <div className=" category-card--image">
                  <img src={category.image} alt="Category" />
                </div>
                <div className="category-card--title">{category.title}</div>
              </div>
            ))}
            <i className="fa fa-arrow-right"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
