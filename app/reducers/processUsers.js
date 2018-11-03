import {handleActions} from 'redux-actions';
import {getUsersRequest, getUsersSuccess, getUsersFailure} from '../actions/processUsers';
import {combineReducers} from 'redux';

const isLoaded = handleActions(
    {
        [getUsersRequest.toString()]: () => false,
        [getUsersSuccess.toString()]: () => true,
        [getUsersFailure.toString()]: () => false,
    },
    false
);

const users = handleActions(
    {
        [getUsersSuccess.toString()]: (state, action) => action.payload,
    },
    []
);


const error = handleActions(
    {
        [getUsersFailure.toString()]: (state, action) => action.payload,
    },
    null
);


export default combineReducers({
    isLoaded,
    users,
    error,
});