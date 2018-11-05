import React from 'react';
import {addTodo, editTodo} from './../actions/processTodos';
import {connect} from 'react-redux';
import {getTodos, getTodosProcessed} from './../selectors/getTodosSelectors';

class TodoForm extends React.Component {
    _addTodo = (evt) => {
        evt.preventDefault();

        this.props.addTodo({
            userId: +this.props.match.params.userId,
            title: this._title.value,
            completed: this._completed.checked
        });
    };

    _editTodo = (evt) => {
        evt.preventDefault();

        this.props.editTodo({
            userId: +this.props.match.params.userId,
            id: +this.props.match.params.todoId,
            title: this._title.value,
            completed: this._completed.checked
        });
    };

    _cancel = (evt) => {
        evt.preventDefault();
        this.props.history.goBack();
    };

    render() {
        const emptyTodo = {
            title: '',
            completed: false
        };

        const todo = this.props.todos.find((todo) => todo.id === +this.props.match.params.todoId) || emptyTodo;

        return(
            <form className='todo-form' onSubmit={this.props.match.params.todoId ? this._editTodo : this._addTodo}>
                <div className='todo-form__fieldset'>
                    <label className='todo-form__label' htmlFor="id">Title</label>
                    <input type="text" size="50" id="title" defaultValue={todo.title} required ref={(input) => this._title = input}/>
                </div>
                <div className='todo-form__fieldset'>
                    <label className='todo-form__label' htmlFor="completed">Completed</label>
                    {
                        todo.completed ?
                            <input type="checkbox" name="status-toggle" value="status" id="completed" defaultChecked ref={(input) => this._completed = input}/> :
                            <input type="checkbox" name="status-toggle" value="status" id="completed" ref={(input) => this._completed = input}/>
                    }
                </div>
                <div className='todo-form__button-container'>
                    <button className='btn' type="submit">Save</button>
                    <button className='btn' type="button" onClick={this._cancel}>Cancel</button>
                </div>
            </form>

        )
    }

    componentDidUpdate() {
        if (this.props.isProcessedTodo) {
            this.props.history.goBack();
        }
    }
}

const mapStateToProps = (state) => ({
    todos: getTodos(state),
    isProcessedTodo: getTodosProcessed(state)
});

const mapDispatchToProps = {
    addTodo,
    editTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);