import React, { Component } from 'react';
import TodoItem from '../objects/TodoItem';

class QueryString extends Component {
    constructor(props) {
        super(props);
        this.state = { data: "" };
        this._callbackMethod = props.callbackMethod

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> # </label>
                    <input onChange={this.handleChange} value={this.state.data}></input>
                </form>
            </div>
        );
    }

    handleChange(params) {
        this.setState({ data: params.target.value });
    }

    handleSubmit(event) {
        let todoItem = new TodoItem(this.state.data);
        event.preventDefault();
        this.setState({ data: "" });
        this._callbackMethod(todoItem);
    }
}

export default QueryString;