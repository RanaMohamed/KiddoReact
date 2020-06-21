import React from "react";
import Category from "../components/category";
import LatestPosts from "../components/latestPosts";

const Home = () => {
  return (
    <>
      <div>
        <div className="heroheader">
          <div>
            <a href="/">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="/">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          Having Fun is the Best Way to Learn come to join our Community
        </div>
        <section>
          <LatestPosts></LatestPosts>
          <Category></Category>
        </section>
        <section>infograph</section>
        <section>contact</section>
      </div>
    </>
  );
};

export default Home;
