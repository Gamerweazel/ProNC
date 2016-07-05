'use strict';

var React = require('react');


var Home = React.createClass({
	render: function () {
		return (
			<div className="jumbotron">
				<form className="form-horizontal">
				<fieldset>
					<legend>New Diagnostic Profile</legend>
					<div className="form-group">
					<label for="inputFName" className="col-lg-2 control-label">First Name</label>
					<div className="col-lg-10">
						<input type="text" className="form-control" id="inputFName" placeholder="First Name" />
					</div>
					</div>
					<div className="form-group">
					<label for="inputLName" className="col-lg-2 control-label">Last Name</label>
					<div className="col-lg-10">
						<input type="text" className="form-control" id="inputLName" placeholder="Last Name" />
					</div>
					</div>
					<div className="form-group">
					<label for="select" className="col-lg-2 control-label">Diagnosis</label>
					<div className="col-lg-10">
					<select multiple="" className="form-control">
						<option>Anxiety</option>
						<option>Bipolar Disorder</option>
						<option>Depression</option>
						<option>Schizophrenia</option>
						<option>Eating Disorder</option>
						</select>
						<br />
						<select className="form-control" id="select">
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
						</select>
						<br />
						<div className="form-group">
					<label for="textArea" className="col-lg-2 control-label">Notes</label>
					<div className="col-lg-10">
						<textarea className="form-control" rows="3" id="textArea"></textarea>
						<span className="help-block"></span>
					</div>
					</div>
					</div>
					</div>
					<div className="form-group">
					<div className="col-lg-10 col-lg-offset-2">
						<button type="reset" className="btn btn-danger">Cancel</button>
						
						<button type="submit" className="btn btn-primary">Submit</button>
					</div>
					</div>
				</fieldset>
				</form>
				</div>
		);
	}
});

module.exports = Home;