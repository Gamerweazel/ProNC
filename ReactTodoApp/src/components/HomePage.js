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
					<label for="inputName" className="col-lg-2 control-label">Name</label>
					<div className="col-lg-10">
						<input type="text" className="form-control" id="inputName" placeholder="Full Name" />
					</div>
					</div>
					<div className="form-group">
					<label for="inputPassword" className="col-lg-2 control-label">Password</label>
					<div className="col-lg-10">
						<input type="password" className="form-control" id="inputPassword" placeholder="Password" />
						<div className="checkbox">
						<label>
							<input type="checkbox" /> Checkbox
						</label>
						</div>
					</div>
					</div>
					<div className="form-group">
					<label for="textArea" className="col-lg-2 control-label">Textarea</label>
					<div className="col-lg-10">
						<textarea className="form-control" rows="3" id="textArea"></textarea>
						<span className="help-block">A longer block of help text that breaks onto a new line and may extend beyond one line.</span>
					</div>
					</div>
					<div className="form-group">
					<label className="col-lg-2 control-label">Radios</label>
					<div className="col-lg-10">
						<div className="radio">
						<label>
							<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="" />
							Option one is this
						</label>
						</div>
						<div className="radio">
						<label>
							<input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
							Option two can be something else
						</label>
						</div>
					</div>
					</div>
					<div className="form-group">
					<label for="select" className="col-lg-2 control-label">Selects</label>
					<div className="col-lg-10">
						<select className="form-control" id="select">
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
						</select>
						<br />
						<select multiple="" className="form-control">
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
						</select>
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