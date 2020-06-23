import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Category from "../components/category";
import Pagination from "./../components/pagination";
import PostsList from "./../components/postslist";

import {
  followCategory,
  unfollowCategory,
} from "../redux/actions/categoryActions";
import SupportersList from "../components/supportersList";

const Categories = () => {
  const [showModal, setShowModal] = useState(false);
  const user = useSelector((state) => state.user.user);
  const type = useSelector((state) => state.user.type);
  const [selectedCategory] = useSelector(
    (state) => state.categories.selectedCategory
  );

  const joinCategoryHandler = () => {
    user?.categories.indexOf(selectedCategory) === -1
      ? dispatch(followCategory(type, selectedCategory))
      : dispatch(unfollowCategory(type, selectedCategory));
  };

  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <div className="category-section">
          <Category></Category>
        </div>
        {selectedCategory && (
          <>
            <button
              className="btn btn--rect btn--primary"
              onClick={() => setShowModal(true)}
            >
              <i className="btn__icon fas fa-headset"></i>
              Supporter
            </button>
            {showModal && (
              <SupportersList
                closeModal={() => setShowModal(false)}
              ></SupportersList>
            )}

            <button
              className="btn btn--rect btn--primary"
              onClick={() => joinCategoryHandler()}
            >
              <i className="btn__icon fas fa-users"></i>
              {user?.categories?.indexOf(selectedCategory) !== -1
                ? "Unfollow Category"
                : "Join Category"}
            </button>
          </>
        )}
      </div>
      <PostsList></PostsList>
      <Pagination reducer="post"></Pagination>
    </>
  );
};

export default Categories;
