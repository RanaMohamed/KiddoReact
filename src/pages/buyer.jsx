import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BuyerInfo from "../components/buyerInfo";
import ProfilePicture from "../components/profilePicture";
import { getBuyerProfile } from "../redux/actions/userActions";
import { getBoughtProducts } from "../redux/actions/productAction";
import Post from "../components/post";
import Pagination from "../components/pagination";
import { useParams } from "react-router";

const Buyer = () => {
	const profile = useSelector((state) => state.user.profile);
	const products = useSelector((state) => state.product.products);
	const currentPage = useSelector((state) => state.post.currentPage);
	const perPage = useSelector((state) => state.post.perPage);
	const dispatch = useDispatch();
	const params = useParams();

	useEffect(() => {
		dispatch(getBuyerProfile(params.id));
		dispatch(getBoughtProducts(params.id, currentPage, perPage));
	}, [params.id, currentPage]);
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
						<div className="my-xl">
							<div
								style={{
									display: "grid",
									gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
									gap: "12rem",
								}}
							>
								{products?.map((p) => (
									<Post key={p._id} post={p.post}></Post>
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
