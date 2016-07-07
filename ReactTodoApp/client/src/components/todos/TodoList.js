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
		todo.completed ? todo.completed = false : todo.completed = true;
		event.preventDefault();
		TodoActionCreator.updateTodo(todo);
	},

	render: function () {
		var checkForTodos = function () {
			if (this.props.todos.length > 0) {
				return this.props.todos.map(createTodoRow, this);
			} else {
				return (
					<tr><h5>You currently have no Todos!</h5></tr>
				);
			}
		}.bind(this);
			

		var createTodoRow = function (todo) {
			return (
				<tr key={todo._id}>
					<td><Link to={"/manage-todo/" + todo._id}>{todo.title}</Link></td>
					<td>{todo.description}</td>
					<td><a href="#" className="btn btn-primary btn-sm" onClick={this.updateTodo.bind(this, todo)}>Completed</a></td>
					<td><a href="#" className="btn btn-danger btn-sm" onClick={this.deleteTodo.bind(this, todo)}>Delete</a></td>
				</tr>
			);
		};
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
					{checkForTodos()}
				</tbody>
			</table>
		);
	}
});

module.exports = TodoList;


