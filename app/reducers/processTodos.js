import {handleActions} from 'redux-actions';
import {getTodosRequest, getTodosSuccess, getTodosFailure} from './../actions/processTodos';
import {removeTodo, removeTodoSuccess, removeTodoFailure} from './../actions/processTodos';
import {addTodo, addTodoSuccess, addTodoFailure} from './../actions/processTodos';
import {editTodo, editTodoSuccess, editTodoFailure} from './../actions/processTodos';
import {combineReducers} from 'redux';

const isLoaded = handleActions(
    {
        [getTodosRequest.toString()]: () => false,
        [getTodosSuccess.toString()]: () => true,
        [getTodosFailure.toString()]: () => false
    },
    false
);

const isProcessedTodo = handleActions(
    {
        [editTodo.toString()]: () => false,
        [editTodoSuccess.toString()]: () => true,
        [editTodoFailure.toString()]: () => false,
        [addTodo.toString()]: () => false,
        [addTodoSuccess.toString()]: () => true,
        [addTodoFailure.toString()]: () => false
    },
    false
);


const todos = handleActions(
    {
        [getTodosSuccess.toString()]: (state, action) => action.payload,
        [removeTodoSuccess.toString()]: (state, action) => {
            const todoId = action.payload;
            return state.filter((todo) => todo.id !== todoId);
        }
    },
    []
);


const error = handleActions(
    {
        [getTodosFailure.toString()]: (state, action) => action.payload,
        [removeTodoFailure.toString()]: (state, action) => action.payload,
        [addTodoFailure.toString()]: (state, action) => action.payload,
        [editTodoFailure.toString()]: (state, action) => action.payload,
    },
    null
);


export default combineReducers({
    isLoaded,
    todos,
    error,
    isProcessedTodo
});