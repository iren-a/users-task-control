import {getUsersRequest, getUsersSuccess, getUsersFailure} from './../actions/processUsers';
import {getTodosRequest, getTodosSuccess, getTodosFailure, addTodo, editTodo, removeTodo} from './../actions/processTodos';

import {getList} from './../api';

export default (store) => (next) => (action) => {
    if (action.type === getUsersRequest.toString()) {
        getList(action.payload)
            .then((entities) => {
                store.dispatch(getUsersSuccess(entities));
            })
            .catch((error) => {
                store.dispatch(getUsersFailure(error));
            });
    }
    if (action.type === getTodosRequest.toString()) {
        getList(action.payload)
            .then((entities) => {
                store.dispatch(getTodosSuccess(entities));
            })
            .catch((error) => {
                store.dispatch(getTodosFailure(error));
            });
    }
    return next(action);
};