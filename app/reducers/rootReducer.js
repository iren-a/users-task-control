import {combineReducers} from 'redux';
import processUsers from './processUsers';
import processTodos from './processTodos';

export default combineReducers({
    processUsers,
    processTodos
});