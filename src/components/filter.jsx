import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getCategories,
	selectCategory,
	clearSelectCategory,
} from "../redux/actions/categoryActions";

const Filter = () => {
	const categories = useSelector((state) => state.categories.categories);
	const selectedCategories = useSelector(
		(state) => state.categories.selectedCategory
	);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCategories());
		return () => {
			dispatch(clearSelectCategory());
		};
	}, [dispatch]);

	const selectCategoryHandler = (id) => {
		dispatch(
			selectCategory(
				id,
				true,
				selectedCategories.some((cat) => cat === id)
			)
		);
	};

	const clearSelectCategoryHandler = () => {
		dispatch(clearSelectCategory());
	};

	return (
		<>
			<ul className="filter">
				<li
					onClick={clearSelectCategoryHandler}
					className={
						"filter-item" +
						(selectedCategories.length === 0
							? " filter-item--selected filter-item--before "
							: "")
					}
				>
					All Categories
				</li>
				{categories.map((category) => (
					<li
						key={category._id}
						onClick={() => selectCategoryHandler(category._id)}
						className={
							"filter-item" +
							(selectedCategories.some((cat) => cat === category._id)
								? " filter-item--selected filter-item--before "
								: "")
						}
					>
						{category.title}
					</li>
				))}
			</ul>
		</>
	);
};

export default Filter;
