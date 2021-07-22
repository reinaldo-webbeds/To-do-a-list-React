import React from "react";
import PropTypes from "prop-types";
//Import component
import Todo from "./Todo.js";

const TodoList = ({ todos, switchCompleted, deleteRecord }) => {

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        deleteRecord={deleteRecord}
                        switchCompleted={switchCompleted}
                    />
                ))}
            </ul>
        </div>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array,
    switchCompleted: PropTypes.func,
    deleteRecord: PropTypes.func
}

export default TodoList;