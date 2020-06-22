import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../redux/actions/paginationActions";

const Pagination = ({ reducer }) => {
	const currentPage = useSelector((state) => state[reducer].currentPage);
	const perPage = useSelector((state) => state[reducer].perPage);
	const total = useSelector((state) => state[reducer].totalNum);

	const pages =
		(total &&
			perPage &&
			Array(Math.ceil(total / perPage))
				.fill()
				.map((_, i) => i + 1)) ||
		[];

	const dispatch = useDispatch();

	const handlePageChange = (page) => {
		dispatch(changePage(reducer, page));
	};

	return (
		<>
			{pages.length > 0 && (
				<div className="pagination">
					<i
						className="fa fa-arrow-left arrow"
						onClick={() =>
							handlePageChange(currentPage === 1 ? 1 : currentPage - 1)
						}
					></i>
					{pages.map((page) => (
						<span
							key={page}
							className={"page" + (page === currentPage ? " active" : "")}
							onClick={() => handlePageChange(page)}
						>
							{page}
						</span>
					))}
					<i
						className="fa fa-arrow-right arrow"
						onClick={() =>
							handlePageChange(
								currentPage === pages.length ? pages.length : currentPage + 1
							)
						}
					></i>
				</div>
			)}
		</>
	);
};

export default Pagination;
