'use strict';

var React = require('react');


var Home = React.createClass({
	render: function () {
		return (
			<div className="jumbotron">
				<h1>Please login with facebook to continue</h1>
				<a href= "auth/facebook" className= "btn btn-primary btn-md">Login</a>
				<a href= "/logout" className= "btn btn-danger btn-md">Logout</a>
				</div>
		);
	}
});

module.exports = Home;