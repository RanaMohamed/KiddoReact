import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Category from "../components/category";
import Pagination from "./../components/pagination";
import PostsList from "./../components/postslist";

import {
	followCategory,
	unfollowCategory,
} from "../redux/actions/categoryActions";
import SupportersList from "../components/supportersList";
import { useHistory } from "react-router";

const Categories = () => {
	const [showModal, setShowModal] = useState(false);
	const user = useSelector((state) => state.user.user);
	const type = useSelector((state) => state.user.type);
	const [selectedCategory] = useSelector(
		(state) => state.categories.selectedCategory
	);
	const dispatch = useDispatch();
	const history = useHistory();

	const joinCategoryHandler = () => {
		user?.categories.indexOf(selectedCategory) === -1
			? dispatch(followCategory(type, selectedCategory))
			: dispatch(unfollowCategory(type, selectedCategory));
	};

	return (
		<>
			<div className="container">
				<Category></Category>
				{selectedCategory && (
					<>
						<button
							className="btn btn--rect btn--primary"
							onClick={() => setShowModal(true)}
						>
							<i className="btn__icon fas fa-headset"></i>
							Supporter
						</button>
						{showModal && (
							<SupportersList
								closeModal={() => setShowModal(false)}
							></SupportersList>
						)}
						{type !== "Buyer" && (
							<button
								className="btn btn--rect btn--primary"
								onClick={() => {
									user ? joinCategoryHandler() : history.push("/kid/login");
								}}
							>
								<i className="btn__icon fas fa-users"></i>
								{user && user?.categories?.indexOf(selectedCategory) !== -1
									? "Unfollow Category"
									: "Join Category"}
							</button>
						)}
					</>
				)}
			</div>
			<PostsList></PostsList>
			<Pagination reducer="post"></Pagination>
		</>
	);
};

export default Categories;
