import {createActions} from 'redux-actions';

const {getTodosRequest, getTodosSuccess, getTodosFailure, addTodo, editTodo, removeTodo} = createActions(
    'GET_TODOS_REQUEST',
    'GET_TODOS_SUCCESS',
    'GET_TODOS_FAILURE',
    'ADD_TODO',
    'EDIT_TODO',
    'REMOVE_TODO'
);

export {getTodosRequest, getTodosSuccess, getTodosFailure, addTodo, editTodo, removeTodo};