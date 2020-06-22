import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSupportersCategory } from "../redux/actions/userActions";
import { Link } from "react-router-dom";

const SupportersList = ({ closeModal }) => {
	const dispatch = useDispatch();
	const [selectedCategory] = useSelector(
		(state) => state.categories.selectedCategory
	);
	const supporters = useSelector((state) => state.user.supporters);

	useEffect(() => {
		dispatch(getSupportersCategory(selectedCategory));
	}, [selectedCategory]);

	return (
		<div className="modal">
			<div className="modal__body">
				<h2 className="d-flex my-sm">Supporters for this category</h2>
				<div className="user-card">
					{supporters.length > 0 ? (
						supporters?.map((supporter) => (
							<Link
								key={supporter._id}
								to={`/supporter/${supporter._id}`}
								className="d-flex align-items-center my-sm"
							>
								<div>
									<img
										style={{ width: "5rem" }}
										src={process.env.PUBLIC_URL + "/img/avatar.svg"}
										alt="Supporter"
									/>
								</div>
								<div>{supporter.username}</div>
							</Link>
						))
					) : (
						<h3>No Supporters for this category</h3>
					)}

					<button className="btn btn--rect btn--1" onClick={closeModal}>
						Close Modal
					</button>
				</div>
			</div>
		</div>
	);
};

export default SupportersList;
