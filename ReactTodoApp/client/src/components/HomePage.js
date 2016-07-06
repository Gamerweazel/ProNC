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
					<label htmlFor="inputFName" className="col-lg-2 control-label">First Name</label>
					<div className="col-lg-10">
						<input type="text" className="form-control" id="inputFName" placeholder="First Name" />
					</div>
					</div>
					<div className="form-group">
					<label htmlFor="inputLName" className="col-lg-2 control-label">Last Name</label>
					<div className="col-lg-10">
						<input type="text" className="form-control" id="inputLName" placeholder="Last Name" />
					</div>
					</div>
					<div className="form-group">
					<label htmlFor="select" className="col-lg-2 control-label">Diagnosis</label>
					<div className="col-lg-10">
					<select multiple="" className="form-control">
						<option>Anxiety</option>
						<option>Bipolar Disorder</option>
						<option>Depression</option>
						<option>Schizophrenia</option>
						<option>Eating Disorder</option>
						</select>
						<br />
					</div>
					<div className="form-group">
      					<label htmlFor="textArea" className="col-lg-2 control-label">Textarea</label>
      					<div className="col-lg-10">
       					 <textarea className="form-control" rows="3" id="textArea"></textarea>
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