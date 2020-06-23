import React from "react";

const About = () => {
  return (
    <div className="container about my-lg">
      <section className=" d-flex justify-content-evenly my-lg">
        <img
          //   className="heroheader__content__images__image"
          src={process.env.PUBLIC_URL + "/imgs/heroheaderImage.png"}
          style={{ width: "20vw" }}
          alt="kids"
        />

        <p className="color-3 w-50 font-size-md">
          <h2 className="color-2">Who are we?</h2>
          We are platform for kids where they can share anything they do for
          other kids to learn from, guided by supervisors for each category.
          Kids can also sign up for courses offered by supporters in different
          categories, and earn badges and coins which they can use to unlock
          premium courses. Kids can also add their products they made for sale
          in the store
        </p>
      </section>

      <section>
        <h2 className="color-1 text-center">What Do We Do?</h2>
        <ul className="d-flex justify-content-evenly font-size-md color-5">
          <li className="p-md w-50 d-flex align-items-center">
            <img
              //   className="heroheader__content__images__image"
              src={process.env.PUBLIC_URL + "/imgs/social-platform.svg"}
              style={{ width: "5vw", marginRight: 20 }}
              alt="kids"
            />
            We offer a social platform for kids to learn and share their
            knowledge with other kids
          </li>
          <li className="p-md w-50 d-flex align-items-center">
            <img
              //   className="heroheader__content__images__image"
              src={process.env.PUBLIC_URL + "/imgs/fun-user-experience.svg"}
              style={{ width: "5vw", marginRight: 20 }}
              alt="kids"
            />
            We are creating a fun user experience to keep kids involved,
            excited, and engaged in the learning process
          </li>

          <li className="p-md w-50 d-flex align-items-center">
            <img
              //   className="heroheader__content__images__image"
              src={process.env.PUBLIC_URL + "/imgs/safe-environment.svg"}
              style={{ width: "5vw", marginRight: 20 }}
              alt="kids"
            />
            We have a community for kids who have the same interests and skills
            Offer a safe environment for kids to sell their products
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
