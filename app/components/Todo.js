import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {removeTodo} from '../actions/processTodos';

class Todo extends React.Component {
    _remove = (evt) => {
        evt.preventDefault();
        if (confirm('Do you want to delete the todo?')) {
            this.props.removeTodo(this.props.todo.id);
        }
    };

    render() {
        return(
            <li className='todo'>
                <div className='todo__id'>{this.props.todo.id}</div>
                <div className='todo__tilte'>{this.props.todo.title}</div>
                <div className='todo__completed'>{this.props.todo.completed ? 'compleded' : 'in process'}</div>
                <button className='todo__delete' onClick={this._remove}>Delete</button>
                <Link to={`/user/${this.props.todo.userId}/todo/${this.props.todo.id}/todo-form`}>
                    <div className='todo__edit'>Edit</div>
                </Link>

            </li>
        )

    }
}

const mapDispatchToProps = {
    removeTodo
};

export default connect(null, mapDispatchToProps)(Todo);