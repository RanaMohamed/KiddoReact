import React from "react";

const Advert = () => {
	return (
		<div className="advert">
			<img
				style={{ width: "100%" }}
				src={process.env.PUBLIC_URL + "/imgs/offer slide.png"}
				alt=""
			/>
		</div>
	);
};

export default Advert;
