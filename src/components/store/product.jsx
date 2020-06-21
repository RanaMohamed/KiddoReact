import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Rating from "react-rating";
import { rateProduct } from "../../redux/actions/productAction";

const Product = ({ product }) => {
  // console.log(product);
  const [showModal, setShowModal] = useState(false);
  const [textReview, setTextReview] = useState("");

  const dispatch = useDispatch();
  let value = useSelector((state) => state.product.value);

  const feedback = useSelector((state) => state.product.feedback);

  const handleRating = (val) => {
    value = val;

    // dispatch(rateProduct(product._id, value));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setTextReview(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(textReview);
    // console.log(value);
    const error = await dispatch(rateProduct(product._id, value, textReview));
    if (error) return;
    alert("Thank you");
    setShowModal(false);
    setTextReview("");
  };
  return (
    <>
      <div className="post-card post-card--bg post-card--bg--primary">
        <div className="post-card__img">
          <img alt="Post" src="../img/post1.png" />
        </div>
        <div className="post-card__body">
          <p className="post-card__title">{product.post?.title}</p>
          <p className="post-card__description">{product.post?.body}</p>
          <div className="post-card__info">
            <img
              className="post-card__avatar"
              alt="Avatar"
              src="../img/avatar.svg"
            />
            <div>
              <p>Full name</p>
              <i className="fa fa-heart like-icon"></i>
              <span>20</span>
              <i className="fa fa-comment comment-icon"></i>
              <span>10</span>
            </div>
          </div>
          <div className="post-card__overlay">
            <button className="btn btn--1 btn--rect">View Details</button>
            <button
              onClick={() => setShowModal(true)}
              className="btn btn--1 btn--rect"
            >
              Rate
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal__body">
            <form>
              <label className="d-flex my-sm">Write A Review</label>
              <textarea
                className="input"
                onChange={handleChange}
                value={textReview}
                placeholder="leave a review..."
              />
              <br></br>
            </form>
            <Rating
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
              initialRating={product.rating}
              onChange={(rate) => handleRating(rate)}
            />
            <button onClick={handleSubmit} className="btn btn--1 btn--rect">
              ok
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
