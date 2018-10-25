import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route} from 'react-router-dom';
import UserList from './UserList';
import UserTasks from './UserTasks';

class App extends React.Component {
    render() {
        return(
            <Switch>
                <Route exact path='/' component={UserList}/>
                <Route path='/user-tasks' component={UserTasks}/>
            </Switch>
        )
    }
}


ReactDOM.render(
    (
        <HashRouter>
            <App />
        </HashRouter>
    ),
    document.getElementById('app')
);