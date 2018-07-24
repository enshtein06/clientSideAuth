import {AUTH_USER, AUTH_ERROR} from './types';
import axios from 'axios';

export const signup = (formProps, callback) => async dispatch => {
	try {
		const response = await axios.post('http://localhost:5000/signup', formProps);

		dispatch({ type: AUTH_USER, payload: response.data.token});
		// Purpose is not losing the token after refreshing the page
		localStorage.setItem('token', response.data.token);
		callback();
	} catch (e) {
		dispatch({type: AUTH_ERROR, payload: 'Email in use!'})
	}
};

export const signout = () => {
	localStorage.removeItem('token');

	return {
		type: AUTH_USER,
		payload: ''
	}
};

export const signin = (formProps, callback) => async dispatch => {
	try {
		const response = await axios.post('http://localhost:5000/signin', formProps);

		dispatch({ type: AUTH_USER, payload: response.data.token});
		// Purpose is not losing the token after refreshing the page
		localStorage.setItem('token', response.data.token);
		callback();
	} catch (e) {
		dispatch({type: AUTH_ERROR, payload: 'Invalid login credentials'})
	}
};