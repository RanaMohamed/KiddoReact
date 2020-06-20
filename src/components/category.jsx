import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "./../redux/actions/categoryActions";

const Category = () => {
  const categories = useSelector((state) => state.categories.categories);
  console.log(categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <>
      <div>
        hello
        {categories.map((category) => (
          <li key={category._id}>{category.title}</li>
        ))}
        after
      </div>
    </>
  );
};

export default Category;
