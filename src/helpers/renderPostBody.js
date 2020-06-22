import React from "react";
import parseJson from "./parseJson";

const renderPostBody = (body) => {
	return parseJson(body).steps ? (
		Object.keys(parseJson(body).steps).map((key) => (
			<React.Fragment key={key}>
				<h2>{key}</h2>
				<p>{parseJson(body).steps[key]}</p>
			</React.Fragment>
		))
	) : (
		<p>{body}</p>
	);
};

export default renderPostBody;
