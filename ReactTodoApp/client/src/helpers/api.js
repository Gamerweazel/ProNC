"use strict";

var ajax = require("./ajax.js");

module.exports = {
    getAllTodos: getAllTodos,
    createTodo: createTodo,
    deleteTodo: deleteTodo
}

function getAllTodos() {
    var url = "/todos";
    var data = {};
    var type = "GET";
    return ajax(url, data, type);
}

function createTodo(todo) {
    var url = "/todos";
    var data = todo;

    return ajax(url, data);
}

function deleteTodo(todo) {
    var url = "/todos/" + todo._id;
    var data = {};
    var type = "DELETE";
    return ajax(url, data, type);
}