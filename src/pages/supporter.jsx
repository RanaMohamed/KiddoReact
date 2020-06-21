import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SupporterInfo from "../components/supporterInfo";
import ProfilePicture from "../components/profilePicture";
import { getSupporterProfile } from "../redux/actions/userActions";
import { getUnapprovedPosts } from "../redux/actions/postActions";
import Post from "../components/post";
import Pagination from "../components/pagination";
import { useParams } from "react-router";

const Supporter = () => {
  const profile = useSelector(state => state.user.profile);
  const Posts = useSelector(state => state.post.posts);
  const currentPage = useSelector(state => state.post.currentPage);
  const perPage = useSelector(state => state.post.perPage);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getSupporterProfile(params.id));
    dispatch(getUnapprovedPosts(currentPage, perPage));
  }, [params.id, currentPage]);

  return (
    <>
      {profile && (
        <div className="container">
          <div className="d-flex justify-content-between">
            <ProfilePicture></ProfilePicture>
            <div className="w-70">
              <h1>{profile.username}</h1>
              <SupporterInfo profile={profile}></SupporterInfo>
            </div>
          </div>
          <section className="my-lg">
            <h2>Latest Posts To approve</h2>
            <div className="container my-xl">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto auto auto",
                  gap: "12rem"
                }}
              >
                {Posts?.map(post => (
                  <Post key={post._id} post={post}></Post>
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

export default Supporter;
