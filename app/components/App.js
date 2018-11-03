import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import UserList from './UserList';
import UserTodos from './UserTodos';



export default class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={UserList}/>
                    <Route path='/user/:userId/todos' component={UserTodos}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
