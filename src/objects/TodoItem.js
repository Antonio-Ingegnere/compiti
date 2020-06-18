class TodoItem {
    constructor(description) {
        this._description = description;
        this._isDone = false;
        this._id = -1;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get isDone() {
        return this._isDone;
    }

    set isDone(value) {
        this._isDone = value;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }
}

export default TodoItem;