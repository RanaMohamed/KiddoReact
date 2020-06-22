import React from "react";
import { Route, Redirect } from "react-router";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ component: Component, userType, ...rest }) => {
	const type = useSelector((state) => state.user.type);
	return (
		<Route
			{...rest}
			render={(props) =>
				type === userType ? (
					<Component {...props} />
				) : (
					<Redirect to={{ pathname: "/", state: { from: props.location } }} />
				)
			}
		/>
	);
};

export default ProtectedRoute;
