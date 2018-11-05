import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import getStore from './../store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import UserList from './UserList';
import UserTodos from './UserTodos';
import TodoForm from './TodoForm';
import style from './../less/style.less'

const store = getStore();

class App extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={UserList}/>
                        <Route path='/user/:userId/todos' component={UserTodos}/>
                        <Route path='/user/:userId/todo-form' component={TodoForm}/>
                        <Route path='/user/:userId/todo/:todoId/todo-form' component={TodoForm}/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
