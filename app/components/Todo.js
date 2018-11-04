import React from 'react';

export default class Todo extends React.Component {
    _remove = () => {
        if (confirm('Do you want to delete the todo?')) {
            this.props.remove(this.props.todo.id);
        }
    };

    render() {
        return(
            <li className='todo'>
                <div className='todo__id'>{this.props.todo.id}</div>
                <div className='todo__tilte'>{this.props.todo.title}</div>
                <div className='todo__completed'>{this.props.todo.completed ? 'compleded' : 'in process'}</div>
                <div className='todo__delete' onClick={this._remove}>Delete</div>
            </li>

        )

    }
}