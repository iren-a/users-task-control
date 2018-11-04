import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import UserList from './UserList';
import UserTodos from './UserTodos';
import TodoForm from './TodoForm';


export default class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={UserList}/>
                    <Route path='/user/:userId/todos' component={UserTodos}/>
                    <Route path='/user/:userId/todo-form' component={TodoForm}/>
                    <Route path='/user/:userId/todo/:todoId/todo-form' component={TodoForm}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
