import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {removeTodo} from './../actions/processTodos';

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
                <div className='todo__id'>{`ID: ${this.props.todo.id}`}</div>
                <div className='todo__tilte'>{`Title: ${this.props.todo.title}`}</div>
                <div className='todo__completed'>{`State: ${this.props.todo.completed ? 'compleded' : 'in process'}`}</div>
                <div className='todo__button-block'>
                    <button className='todo__delete btn' onClick={this._remove}>Delete</button>
                    <Link className='todo__edit btn' to={`/user/${this.props.todo.userId}/todo/${this.props.todo.id}/todo-form`}>Edit</Link>
                </div>
            </li>
        )

    }
}

const mapDispatchToProps = {
    removeTodo
};

export default connect(null, mapDispatchToProps)(Todo);