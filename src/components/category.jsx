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
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <i className="fa fa-arrow-left"></i>
            {categories?.map((category) => (
              <div
                className="category-card category-card--sm"
                key={category._id}
                // onClick={filter}
              >
                <div className=" category-card--image">
                  <img src={category.image} alt="Category Image" />
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
