import React from "react";
import ReactDOM from "react-dom";
import "./css/main.css";
import "./css/toastr.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import App from "./App.jsx";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
	"pk_test_51GtU32GBToZL71CcB5Fc52yfN8PuqrV5IrruTPsKyCTofaYrLvAORV1Pu45IxlkBcV4Zt1zocDVobVy4GsAybNOb00rTHhzJZ8"
);

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<Elements stripe={stripePromise}>
					<App />
				</Elements>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
