import React, {Component} from 'react';
import {connect} from 'react-redux';

// HOC
export default (ChildComponent) => {
	class composedComponent extends Component {
		// Out Component Just got rendered
		componentDidMount () {
			this.shouldNavigateAway();
		}

		// Out component jiust got updated
		componentDidUpdate () {
			this.shouldNavigateAway();
		}

		shouldNavigateAway () {
			if(!this.props.auth) {
				this.props.history.push('/');
			} 
		}
		render() {
			return <ChildComponent {...this.props} />
		}
	};
	const mapStateToProps = state => {
		return {auth: state.auth.authenticated};
	};

	return connect(mapStateToProps)(composedComponent);
};