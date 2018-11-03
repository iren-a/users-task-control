import {handleActions} from 'redux-actions';
import {getTodosRequest, getTodosSuccess, getTodosFailure, addTodo, editTodo, removeTodo} from '../actions/processTodos';
import {combineReducers} from 'redux';

const isLoaded = handleActions(
    {
        [getTodosRequest.toString()]: () => false,
        [getTodosSuccess.toString()]: () => true,
        [getTodosFailure.toString()]: () => false,
    },
    false
);

const todos = handleActions(
    {
        [getTodosSuccess.toString()]: (state, action) => action.payload,
        [removeTodo.toString()]: (state, action) => {
            const todoId = action.payload;
            return state.filter((todo) => todo.id !== todoId);
        }
    },
    []
);


const error = handleActions(
    {
        [getTodosFailure.toString()]: (state, action) => action.payload,
    },
    null
);


export default combineReducers({
    isLoaded,
    todos,
    error,
});