import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'; 
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers/index';
import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import Signout from './components/auth/Signout';
import Feature from './components/Feature';

const store = createStore(reducers, {
	auth: {authenticated: localStorage.getItem('token')}
}, applyMiddleware(reduxThunk));

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App>
				<Route path="/" component={Welcome} />
				<Route path="/signup" component={Signup} />
				<Route path="/feature" component={Feature} />
				<Route path="/signout" component={Signout} />
				<Route path="/signin" component={Signin} />
			</App>
		</BrowserRouter>
	</Provider>,
	document.querySelector('#root')
);