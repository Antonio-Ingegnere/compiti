import React, { Component } from 'react';
import QueryString from './QueryString';
import TodoItem from '../objects/TodoItem';
import TodoItemView from './TodoItemView';
import Utils from '../objects/Utils';

class App extends Component {

    constructor() {
        super();
        this.onQueryStringEntered = this.onQueryStringEntered.bind(this);
        this.onTodoObjectChanged = this.onTodoObjectChanged.bind(this);
        this.onTodoObjectDeleted = this.onTodoObjectDeleted.bind(this);
        this.state = { todoItems: [] };
    }

    render() {

        let itemsToRender;
        if (this.state.todoItems) {
            itemsToRender = this.state.todoItems.map((item) =>
                <TodoItemView key={item.id}
                    todoItem={item}
                    objectChanged={this.onTodoObjectChanged}
                    objectDeleted={this.onTodoObjectDeleted}>
                </TodoItemView>
            );
        }

        return (
            <div>
                <h1>My react app</h1>
                <QueryString callbackMethod={this.onQueryStringEntered} />
                <div id="tasksContainer">
                    {itemsToRender}
                </div>
            </div>
        );
    }

    onQueryStringEntered(todoItem) {
        // todoItem.id = this.state.todoItems.length;//TODO: Refactor
        todoItem.id = Utils.CreateGUID();

        this.setState(state => {
            const todoItems = state.todoItems.concat(todoItem);
            return { todoItems };
        });
    }

    onTodoObjectDeleted(deletedItem) {
        this.setState(aState => {
            const todoItems = aState.todoItems.filter((item, index) => item.id != deletedItem.id);
            return { todoItems };
        })
    }

    onTodoObjectChanged(newItem) {
        console.log('entered');

        let items = this.state.todoItems;
        items.forEach(item => {
            if (item.id === newItem.id) {
                item.description = newItem.description;
                item.isDone = newItem.isDone;
            }
        });

        this.setState({ todoItems: items });

        // this.setState(state => {
        //     let todoItems = state.todoItems;

        //     todoItems.forEach(item => {
        //         console.log(item);
        //         if (item.id === newItem.id) {
        //             item.description = newItem.description;
        //             item.isDone = newItem.isDone;
        //         }
        //     });

        //     return { todoItems };
        // });
    }
}

export default App;