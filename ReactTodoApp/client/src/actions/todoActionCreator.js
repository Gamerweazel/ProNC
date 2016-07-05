'use strict';

var Dispatcher = require('../dispatcher/Dispatcher');
var ActionTypes = require('../constants/actionTypes');
var todoApi = require('../mockApi/todoApi');


var TodoActionCreator = {
	createTodo: function (todo) {
		var newTodo = todoApi.saveTodo(todo);

		Dispatcher.dispatch({
			actionType: ActionTypes.CREATE_TODO,
			todo: newTodo
		});
	}
};

module.exports = TodoActionCreator;