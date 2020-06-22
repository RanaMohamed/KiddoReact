import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../redux/actions/postActions";
import { postSchema } from "../helpers/schemas";
import { convertToFormData } from "../helpers/convertToFormData";
import * as _ from "lodash";
import { useHistory } from "react-router";
import { useEffect } from "react";
import { getCategories } from "../redux/actions/categoryActions";

const PostForm = () => {
	const user = useSelector((state) => state.user.user);
	const categories = useSelector((state) => state.categories.categories);
	const history = useHistory();
	const [post, setPost] = useState({
		title: "",
		body: "",
		attachedFiles: [],
		category: "",
		isProduct: false,
		price: 0,
	});
	const [steps, setSteps] = useState({
		step1: "",
		step2: "",
		step3: "",
	});
	const [checked, setChecked] = useState(false);
	const [errors, setErrors] = useState({});
	// const [mainImgUrl, setImgUrl] = useState("");
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCategories());
	}, []);
	const handleSubmit = async (e) => {
		e.preventDefault();
		let bodydata = JSON.stringify({ steps });
		let newPost = {
			...post,
			body: bodydata,
			isProduct: checked,
		};
		//Validate Error
		const { error } = postSchema.validate(newPost, { abortEarly: false });
		if (error) {
			const err = _.keyBy(error.details, (e) => e.context.label);
			setErrors(err);
			return;
		}
		setErrors({});
		const formData = convertToFormData(newPost);
		//call backEnd

		const errorRes = await dispatch(addPost(formData));
		if (!_.isEmpty(errorRes)) {
			setErrors(errorRes);
			return;
		}

		history.replace("/");
	};

	const handelFilesUploaded = (e) => {
		let attachedFiles = [];
		for (let i = 0; i < e.target.files.length; i++) {
			attachedFiles.push(e.target.files[i]);
		}
		setPost({
			...post,
			attachedFiles: attachedFiles,
		});
		//   let reader = new FileReader();
		//   reader.onload = function(event) {
		//     setImgUrl(event.target.result);
		//   };
		//   reader.readAsDataURL(e.target.files[0]);
		// };
	};

	return (
		<>
			<div className="form__window-body--bg-info">
				<div className="form-container">
					<form className="form" onSubmit={handleSubmit}>
						<p className="form__title">fill in post info</p>
						<label htmlFor="category" className="form__subtitle">
							Category
						</label>
						<select
							className="input form__input-1 input--text-color-info input--padding-sm input--border-radius-md input--border-info"
							value={post.category}
							onChange={(e) => setPost({ ...post, category: e.target.value })}
						>
							<option selected disabled value="">
								Select Category
							</option>
							{user?.categories?.map((cat) => (
								<option key={cat} value={cat}>
									{categories?.find((category) => category._id === cat)?.title}
								</option>
							))}
						</select>
						{errors.category && (
							<span className="">{errors.category.message}</span>
						)}
						{/* title */}
						<label htmlFor="title" className="form__subtitle">
							title
						</label>
						<input
							type="text"
							className="input form__input-1 input--text-color-info input--padding-sm input--border-radius-md input--border-info"
							placeholder="post title"
							value={post.title}
							onChange={(e) => setPost({ ...post, title: e.target.value })}
						/>
						{errors.title && <span className="">{errors.title.message}</span>}
						{/* body */}
						<label className="form__subtitle">Your steps</label>
						<div style={{ paddingLeft: "2rem" }}>
							{/* step1 */}
							<input
								type="text"
								className="input form__input-2 input--text-color-info input--padding-sm input--border-radius-md input--border-info"
								placeholder="What was your preperation step"
								value={steps.step1}
								onChange={(e) => setSteps({ ...steps, step1: e.target.value })}
							/>
							{/* step2 */}
							<input
								type="text"
								className="input form__input-2 input--text-color-info input--padding-sm input--border-radius-md input--border-info"
								placeholder="What was your implementation step"
								value={steps.step2}
								onChange={(e) => setSteps({ ...steps, step2: e.target.value })}
							/>
							{/* step3 */}
							<input
								type="text"
								className="input form__input-2 input--text-color-info input--padding-sm input--border-radius-md input--border-info"
								placeholder="What was your Result step"
								value={steps.step3}
								onChange={(e) => setSteps({ ...steps, step3: e.target.value })}
							/>
						</div>
						{/* files */}
						<label htmlFor="attachedFiles" className="form__subtitle">
							add files
						</label>
						<input
							type="file"
							className="input form__input-1 input--text-color-info input--padding-sm input--border-radius-md input--border-info"
							placeholder="What was your Result step"
							name="attachedFiles"
							onChange={handelFilesUploaded}
							multiple
						/>
						{errors.attachedFiles && (
							<span className="">{errors.attachedFiles.message}</span>
						)}
						{/* Add to store */}
						<label htmlFor="attachedFiles" className="form__subtitle">
							Add to store
						</label>
						<input
							type="checkbox"
							name="addStore"
							value={checked}
							onChange={(e) => setChecked(!checked)}
						/>
						<label style={{ display: "inline" }}> Is Product</label>

						{/* product price */}
						{checked && (
							<div style={{ marginTop: "1rem" }}>
								<label htmlFor="attachedFiles" className="form__subtitle">
									price
								</label>
								<input
									type="number"
									className="input form__input-1 input--text-color-info input--padding-sm input--border-radius-md input--border-info"
									placeholder="What was your Result step"
									value={post.price}
									onChange={(e) => setPost({ ...post, price: e.target.value })}
								/>
							</div>
						)}

						<button
							type="submit"
							className="btn btn--rect btn--primary form__btn"
						>
							Save
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default PostForm;
