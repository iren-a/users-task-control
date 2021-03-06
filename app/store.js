import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/rootReducer';
import getListMiddleware from './middlewares/getListMiddleware';

export default () =>
    createStore(
        rootReducer,
        compose(
            applyMiddleware(getListMiddleware),
            window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
        )
    );