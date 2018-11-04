import {getUsersRequest, getUsersSuccess, getUsersFailure} from './../actions/processUsers';
import {getTodosRequest, getTodosSuccess, getTodosFailure} from './../actions/processTodos';
import {removeTodo, removeTodoSuccess, removeTodoFailure} from './../actions/processTodos';

import {getList, remove} from './../api';

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
    if (action.type === removeTodo.toString()) {
        remove('todos', action.payload)
            .then((entities) => {
                store.dispatch(removeTodoSuccess(action.payload));
            })
            .catch((error) => {
                store.dispatch(removeTodoFailure(error));
            });
    }
    return next(action);
};