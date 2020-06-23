import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const ProfilePicture = () => {
	const user = useSelector((state) => state.user.user);
	const params = useParams();
	return (
		<>
			<section className="profile-pic">
				<div>
					<img
						id="pic"
						src={process.env.PUBLIC_URL + "/imgs/avatar.svg"}
						alt="kid"
					></img>
					{user?._id === params.id && (
						<section className="profile-pic_inner">
							<img
								src={process.env.PUBLIC_URL + "/imgs/icon-camera.svg"}
								alt=""
							></img>
						</section>
					)}
				</div>
			</section>
		</>
	);
};

export default ProfilePicture;
