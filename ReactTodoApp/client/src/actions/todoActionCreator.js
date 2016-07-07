'use strict';

var Dispatcher = require('../dispatcher/Dispatcher');
var ActionTypes = require('../constants/actionTypes');
var API = require("../helpers/api");

var TodoActionCreator = {
	createTodo: function (todo) {
		var newTodoPromise = API.createTodo(todo);

		newTodoPromise
			.then(function (newTodo) {
				
				Dispatcher.dispatch({
					actionType: ActionTypes.CREATE_TODO,
					todo: newTodo
				});
			})
			.fail(function (xhr, status, err) {
				console.log("Create Todo Fail")
			});
	},

	deleteTodo: function (todo) {
		var deleteTodoPromise = API.deleteTodo(todo);

		deleteTodoPromise
			.then(function () {

				Dispatcher.dispatch({
					actionType: ActionTypes.DELETE_TODO,
					todoId: todo._id
				});
			})
			.fail(function (xhr, status, err) {
				console.log("Delete Todo Fail")
			});
	}
};

module.exports = TodoActionCreator;