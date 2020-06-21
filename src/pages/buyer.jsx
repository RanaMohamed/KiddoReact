import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BuyerInfo from "../components/buyerInfo";
import ProfilePicture from "../components/profilePicture";
import { getBuyerProfile } from "../redux/actions/userActions";
import { getBoughtProducts } from "../redux/actions/productAction";
import Post from "../components/post";
import Pagination from "../components/pagination";

const Buyer = () => {
  const profile = useSelector(state => state.user.profile);
  const products = useSelector(state => state.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBuyerProfile("5eee60664f9e0a6270074eaa"));
    dispatch(getBoughtProducts("5eee60664f9e0a6270074eaa", 1, 4));
  }, []);
  return (
    <>
      {profile && (
        <div className="container">
          <div className="d-flex justify-content-between">
            <ProfilePicture></ProfilePicture>
            <div className="w-70">
              <h1>{profile.username}</h1>
              <BuyerInfo profile={profile}></BuyerInfo>
            </div>
          </div>
          <section className="my-lg">
            <h2>Latest purchases</h2>
            <div className="container my-xl">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto auto auto",
                  gap: "12rem"
                }}
              >
                {products?.map(p => (
                  <Post key={p._id} post={p}></Post>
                ))}
              </div>
            </div>
          </section>
          <section className="pagination">
            <Pagination reducer="post"></Pagination>
          </section>
        </div>
      )}
    </>
  );
};

export default Buyer;
