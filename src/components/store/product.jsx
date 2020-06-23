import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Rating from "react-rating";
import { rateProduct } from "../../redux/actions/productAction";
import PaymentForm from "../paymentForm";
import { Link, useHistory } from "react-router-dom";
import renderPostBody from "../../helpers/renderPostBody";

const Product = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalBuy, setShowModalBuy] = useState(false);
  const [textReview, setTextReview] = useState("");
  let user = useSelector((state) => state.user.user);
  let type = useSelector((state) => state.user.type);

  const history = useHistory();
  const dispatch = useDispatch();
  let value = useSelector((state) => state.product.value);

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

    const error = await dispatch(rateProduct(product._id, value, textReview));
    if (error) return;

    setShowModal(false);
    setTextReview("");
  };
  return (
    <>
      <div className="post-card post-card--bg post-card--bg--primary">
        <div className="post-card__img">
          <img
            alt="Post"
            src={
              product &&
              product.post &&
              product.post.attachedFiles &&
              product.post.attachedFiles.length > 0
                ? product.post.attachedFiles[0]
                : process.env.PUBLIC_URL + "/imgs/post1.png"
            }
          />
        </div>

        <div className="post-card__body">
          <p className="post-card__title">{product.post?.title}</p>
          <div className="post-card__description">
            {renderPostBody(product?.post?.body)}
          </div>
          <div className="post-card__info">
            <img
              className="post-card__avatar"
              alt="Avatar"
              src={process.env.PUBLIC_URL + "/imgs/avatar.svg"}
            />

            <div>
              <p>{product?.post?.authorKid?.username}</p>
              <i className="fa fa-heart like-icon"></i>
              <span>{product?.post?.likes?.length}</span>
              <i className="fa fa-comment comment-icon"></i>
              <span>{product?.post?.commentsTotal}</span>
            </div>
          </div>
          <p className="p-sm color-1">{product?.price}LE</p>
          {product.rating === null ? (
            <p className="color-3">No Ratings Yet</p>
          ) : (
            <Rating
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
              initialRating={product.rating}
              readonly
            />
          )}
          <div className="post-card__overlay">
            <Link
              to={`/post-details/${product?.post?._id}`}
              className="btn btn--1 btn--rect"
            >
              View Details
            </Link>
            {product?.buyer?.indexOf(user?._id) !== -1 && (
              <button
                onClick={() => setShowModal(true)}
                className="btn btn--1 btn--rect"
              >
                Rate
              </button>
            )}
            {(!user || type === "Buyer") &&
              product?.buyer?.indexOf(user?._id) === -1 && (
                <button
                  onClick={() => {
                    user ? setShowModalBuy(true) : history.push("/buyer/login");
                  }}
                  className="btn btn--1 btn--rect"
                >
                  Buy
                </button>
              )}
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
              Ok
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="btn btn--2 btn--rect"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {showModalBuy && (
        <PaymentForm
          product={product}
          closeForm={() => setShowModalBuy(false)}
        ></PaymentForm>
      )}
    </>
  );
};

export default Product;
