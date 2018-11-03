import React from 'react';
import Todo from './Todo';
import {connect} from 'react-redux';
import {getTodosLoading, getTodos, getTodosError} from './../selectors/getTodosSelectors';
import {getTodosRequest} from './../actions/processTodos';
import {removeTodo} from './../actions/processTodos';
import {Link} from 'react-router-dom';


class UserTodos extends React.Component {
    _removeTodo = (id) => {
        this.props.removeTodo(id);
    };

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
            return(
                <div className='user-todos'>
                    <Link to={`/`}>
                        <div>Назад</div>
                    </Link>
                    <h1 className='user-todo__header'>User todos</h1>
                    <ul>
                        {this.props.todos.map(todo => (
                            <Todo todo={todo} key={todo.id} remove={this._removeTodo}/>
                        ))}
                    </ul>
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
    error: getTodosError(state),
});

const mapDispatchToProps = {
    getTodosRequest,
    removeTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTodos);