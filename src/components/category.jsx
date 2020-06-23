import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCategories,
  selectCategory,
  clearSelectCategory,
} from "./../redux/actions/categoryActions";
import { Link } from "react-router-dom";

const Category = ({ home }) => {
  const categories = useSelector((state) => state.categories.categories);
  const [selectedCategory] = useSelector(
    (state) => state.categories.selectedCategory
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    return () => {
      if (!home) dispatch(clearSelectCategory());
    };
  }, []);

  const selectCategoryHandler = (id) => {
    dispatch(selectCategory(id));
  };

  const clearSelectCategoryHandler = () => {
    dispatch(clearSelectCategory());
  };

  return (
    <>
      <section className="category-section my-md">
        <h2>Categories</h2>
        <div className="d-flex justify-content-between align-items-center">
          <i className="fa fa-arrow-left"></i>
          <div
            className={
              "category-card category-card--sm" +
              (!selectedCategory ? " category-card--primary" : "")
            }
            onClick={() => clearSelectCategoryHandler()}
          >
            <div className="category-card--image">
              <img
                src={process.env.PUBLIC_URL + "./imgs/all-categories.svg"}
                alt="All Categories"
              />
            </div>
            <div className="category-card--title">All Categories</div>
          </div>
          {categories?.map((category) => (
            <Link
              to="/categories"
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
            </Link>
          ))}
          <i className="fa fa-arrow-right"></i>
        </div>
      </section>
    </>
  );
};

export default Category;
