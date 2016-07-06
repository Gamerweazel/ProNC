'use strict';

var React = require('react');
var todoApi = require('../../mockApi/todoApi');
var toastr = require('toastr');


var TodoList = React.createClass({

	deleteTodo: function (todoId, event) {
		event.preventDefault();
		todoApi.deleteTodo(todoId);
		toastr.success('Todo deleted!');
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
					<td>{todo.title}</td>
					<td>{todo.description}</td>
					<td><a href="#" onClick={this.deleteTodo.bind(this, todo._id)}>Delete</a></td>
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


