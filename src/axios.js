import axios from 'axios';

// import toastr from './components/toastr';
import store from './redux/store';
import { startRequest, finishRequest } from './redux/actions/requestActions';
import objectMap from './helpers/objectMap';
const instance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

const token = localStorage.getItem('token');
if (token) instance.defaults.headers.common['authorization'] = token;

instance.interceptors.request.use((config) => {
	store.dispatch(startRequest());
	return config;
});

instance.interceptors.response.use(
	(response) => {
		// if (response.status === 201)
		// 	response.data.message && toastr.success(response.data.message);
		store.dispatch(finishRequest());
		return response.data;
	},
	(error) => {
		// if (error.response?.status === 401) {
		// 	store.dispatch(logout());
		// } else {
		// }
		// toastr.error(
		// 	error.response?.data?.errors
		// 		? 'Check your data'
		// 		: error.response?.data?.message
		// 		? error.response.data.message
		// 		: error.message
		// );
		store.dispatch(finishRequest());
		if (error.response?.data?.errors?.errors) {
			const errors = error.response.data.errors.errors;

			return Promise.reject(
				objectMap(errors, (v) => ({ ...v, message: v.properties?.message }))
			);
		}

		return Promise.reject({});
	}
);

export default instance;
