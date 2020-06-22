import React from "react";
import parseJson from "./parseJson";

const renderPostBody = (body) => {
	return parseJson(body)?.steps ? (
		Object.keys(parseJson(body).steps).map((key) => (
			<React.Fragment key={key}>
				<p className="step">{key}</p>
				<p className="step-body">{parseJson(body).steps[key]}</p>
			</React.Fragment>
		))
	) : (
		<p>{body}</p>
	);
};

export default renderPostBody;
