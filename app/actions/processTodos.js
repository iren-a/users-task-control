import {createActions} from 'redux-actions';

const {getTodosRequest, getTodosSuccess, getTodosFailure} = createActions(
    'GET_TODOS_REQUEST',
    'GET_TODOS_SUCCESS',
    'GET_TODOS_FAILURE'
);

const {removeTodo, removeTodoSuccess, removeTodoFailure} = createActions(
    'REMOVE_TODO',
    'REMOVE_TODO_SUCCESS',
    'REMOVE_TODO_FAILURE'
);

export {
    getTodosRequest,
    getTodosSuccess,
    getTodosFailure,
    removeTodo,
    removeTodoSuccess,
    removeTodoFailure};