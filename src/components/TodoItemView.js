import React, { Component } from 'react';
import TodoItem from '../objects/TodoItem';

class TodoItemView extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDeleteClilck = this.handleDeleteClilck.bind(this);
    }

    render() {
        return (
            <div>
                {/* <form> */}
                    <input type="checkbox" checked={this.props.todoItem.isDone} onChange={this.handleInputChange} />
                    <label>{this.props.todoItem.description}</label>
                    <input type="button" onClick={this.handleDeleteClilck} value="X"/>
                {/* </form> */}
            </div>
        );
    }

    handleInputChange(event) {

        let newItem = new TodoItem();
        Object.assign(newItem, this.props.todoItem);
        newItem.isDone = event.target.checked;
        this.props.objectChanged(newItem);
    }

    handleDeleteClilck(event){
        // event.preventDefault();
        let newItem = new TodoItem();
        Object.assign(newItem, this.props.todoItem);
        this.props.objectDeleted(newItem);
    }
}

export default TodoItemView;