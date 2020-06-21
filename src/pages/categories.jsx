import React, { useState } from "react";
import { useSelector } from "react-redux";
import Category from "../components/category";
import Pagination from "./../components/pagination";
import PostsList from "./../components/postslist";

const Categories = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory] = useSelector(
    (state) => state.categories.selectedCategory
  );
  const joinCategory = () => {};
  return (
    <>
      <Category></Category>
      <button
        className="btn btn--rect btn--primary"
        onClick={() => setShowModal(true)}
      >
        <i class="fas fa-headset"></i>
        --Supporter
      </button>
      {showModal && (
        <div className="modal">
          <div className="modal__body">
            <form>
              <label className="d-flex my-sm">
                Choose a Supporter to Help you
              </label>
            </form>
          </div>
        </div>
      )}
      <button
        className="btn btn--rect btn--primary"
        onClick={() => joinCategory()}
      >
        <i class="fas fa-users"></i>
        --Join Category
      </button>
      <PostsList></PostsList>
      <Pagination reducer="post"></Pagination>
    </>
  );
};

export default Categories;
