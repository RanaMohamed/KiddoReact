import React from "react";
import Category from "../components/category";
import LatestPosts from "../components/latestPosts";
import ContactForm from "./../components/contactForm";
import Graph from "../components/graph";

const Home = () => {
	return (
		<>
			<section className="slide1">
				<div className="slide heroheader">
					<div className="heroheader__gradient"></div>
					<div className="heroheader__content container">
						<div className="heroheader__content__text">
							<div className="heroheader__content__socialMedia">
								<a href="/">
									<i className="fab fa-facebook heroheader__content__socialMedia__icon"></i>
								</a>
								<a href="/">
									<i className="fab fa-twitter heroheader__content__socialMedia__icon"></i>
								</a>
								<a href="/">
									<i className="fab fa-instagram heroheader__content__socialMedia__icon"></i>
								</a>
							</div>

							<div className="heroheader__content__title">
								<h2 className="heroheader__content__slogan">
									HAVING FUN IS THE BEST WAY TO LEARN
								</h2>
								<p className="heroheader__content__callToAction">
									Come to join our community
								</p>
							</div>
						</div>
						<div className="heroheader__content__images">
							<img
								className="heroheader__content__images__image"
								src="../imgs/heroheaderImage.png"
							/>
							<div />
						</div>
					</div>
				</div>
				<div className="slide">
					<div className="home-section2"></div>
					<div className="home-section2__content">
						<div className="container my-xl">
							<LatestPosts></LatestPosts>
							<Category home="true"></Category>
						</div>
					</div>
				</div>
			</section>
			<section className="slide2">
				<div className="container home-section3__content">
					<h2 className="home-section3__content__title my-lg">
						Know Interact Develop Do Offer
					</h2>
					<div className="home-section3__content__infograph ">
						<div className="graph">
							<Graph></Graph>
						</div>
					</div>
					<h2 className="home-section3__content__title--dark my-lg">
						WE ARE HERE TO HELP YOU :)
					</h2>
				</div>
			</section>
			<section>
				<ContactForm></ContactForm>
			</section>
		</>
	);
};

export default Home;
