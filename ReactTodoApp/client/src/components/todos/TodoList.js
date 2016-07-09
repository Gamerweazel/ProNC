'use strict';

var React = require('react');
var Link = require("react-router").Link
var TodoActionCreator = require("../../actions/todoActionCreator");

var TodoList = React.createClass({

	deleteTodo: function (todo, event) {
		event.preventDefault();
		TodoActionCreator.deleteTodo(todo)
	},

	updateTodo: function(todo, event) {
		event.preventDefault();
		todo.completed ? todo.completed = false : todo.completed = true;
		TodoActionCreator.updateTodo(todo);
	},

	render: function () {
		var output;
			
		var createTodoRow = function (todo) {
			var tdClass = "";
			var isDone = "Mark as done";
			var todoTitle = todo.title;
			var todoDescription = todo.description;
			if (todo.completed) {
				tdClass = "todo-done";
				isDone = "Mark as not done";
				todoTitle = (<s>{todo.title}</s>);
				todoDescription = (<s>{todo.description}</s>);
			}
			return (
				<tr key={todo._id}>
					<td className={tdClass}><Link to={"/manage-todo/" + todo._id}>{todoTitle}</Link></td>
					<td className={tdClass}>{todoDescription}</td>
					<td><a href="#" className="btn btn-primary btn-sm" onClick={this.updateTodo.bind(this, todo)}>{isDone}</a></td>
					<td><a href="#" className="btn btn-danger btn-sm" onClick={this.deleteTodo.bind(this, todo)}>Delete</a></td>
				</tr>
			);
		};

		if (this.props.todos.length > 0) {
			output = this.props.todos.map(createTodoRow, this);
		} else {
			output = (<tr><h5>You have no Todos!</h5></tr>);
		}
		
		return (
			<table className="table">
				<thead>
					<tr>
						<th>Title</th>
						<th>Description</th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{output}
				</tbody>
			</table>
		);
	}
});

module.exports = TodoList;


