import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Rating from "react-rating";
import { rateProduct } from "../../redux/actions/productAction";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  let value = useSelector((state) => state.product.value);

  const feedback = useSelector((state) => state.product.feedback);

  // const [initialVal, setInitialVal] = useState(0);

  // useEffect(() => {
  //   dispatch(rateProduct(product._id, ini));
  // }, [value]);

  const handleRating = (val) => {
    // setInitialVal({ initialVal: val });
    value = val;
    console.log(value);
    dispatch(rateProduct(product._id, value));
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
            <br></br>
          </div>
        </div>
        <Rating
          emptySymbol="far fa-star"
          fullSymbol="fas fa-star"
          initialRating={product.feedbacks[0]?.value}
          onChange={(rate) => handleRating(rate)}
        />
      </div>
    </>
  );
};

export default Product;
