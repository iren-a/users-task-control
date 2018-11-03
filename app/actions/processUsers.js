import {createActions} from 'redux-actions';

const {getUsersRequest, getUsersSuccess, getUsersFailure} = createActions(
    'GET_USERS_REQUEST',
    'GET_USERS_SUCCESS',
    'GET_USERS_FAILURE'
);

export {getUsersRequest, getUsersSuccess, getUsersFailure};