import React from 'react';
import Todo from './Todo';
import {connect} from 'react-redux';
import {getTodosLoading, getTodos, getTodosError} from './../selectors/getTodosSelectors';
import {getUsers} from '../selectors/getUsersSelectors';
import {getTodosRequest} from './../actions/processTodos';
import {Link} from 'react-router-dom';


class UserTodos extends React.Component {
    render() {
        if (this.props.error) {
            return (
                <div>Error: {this.props.error.message}</div>
            );
        } else if (!this.props.isLoaded) {
            return (
                <div>Loading...</div>
            );
        } else {
            const user = this.props.users.find((user) => user.id === +this.props.match.params.userId);

            return(
                <div className='user-todos'>
                    <Link to='/'>
                        <div>Back to all users</div>
                    </Link>
                    <h1 className='user-todo__header'>User todos</h1>
                    <Link to={`/user/${this.props.match.params.userId}/todo-form`}>
                        <div className='user-todo__add'>Add todo</div>
                    </Link>
                    <div className='user-todos__user-info'>
                        <div>{user.name}</div>
                        <div>{user.username}</div>
                        <div>{user.email}</div>
                        <div>{user.phone}</div>
                        <div>{user.website}</div>
                    </div>
                    <div className='user-todos__list'>
                        <ul>
                            {this.props.todos.map(todo => (
                                <Todo todo={todo} key={todo.id}/>
                            ))}
                        </ul>
                    </div>

                </div>
            );
        }
    }

    componentDidMount() {
        this.props.getTodosRequest(`users/${this.props.match.params.userId}/todos`);
    }
}

const mapStateToProps = (state) => ({
    isLoaded: getTodosLoading(state),
    todos: getTodos(state),
    users: getUsers(state),
    error: getTodosError(state),
});

const mapDispatchToProps = {
    getTodosRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTodos);