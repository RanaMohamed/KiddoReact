import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Category from "../components/category";
import Pagination from "./../components/pagination";
import PostsList from "./../components/postslist";
import { getSupportersCategory } from "./../redux/actions/userActions";

const Categories = () => {
  const [showModal, setShowModal] = useState(false);
  const supporters = useSelector((state) => state.user.supporters);
  const [selectedCategory] = useSelector(
    (state) => state.categories.selectedCategory
  );

  const joinCategoryHandler = () => {};

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSupportersCategory(selectedCategory));
  }, [selectedCategory]);

  return (
    <>
      <Category></Category>
      <button
        className="btn btn--rect btn--primary"
        onClick={() => setShowModal(true)}
      >
        <i className="fas fa-headset"></i>
        --Supporter
      </button>
      {showModal && (
        <div className="modal">
          <div className="modal__body">
            <form>
              <label className="d-flex my-sm">
                Choose a Supporter to Help you
              </label>
              <div className="user-card">
                {supporters?.map((supporter) => (
                  <p key={supporter._id}>
                    <div>---Supportter img---</div>
                    <div>{supporter.name}</div>
                  </p>
                ))}
              </div>
            </form>
          </div>
        </div>
      )}
      <button
        className="btn btn--rect btn--primary"
        onClick={() => joinCategoryHandler()}
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
