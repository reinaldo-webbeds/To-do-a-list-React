import React from "react";
//Import component
import Todo from "./Todo.js";

const TodoList = ({todos , switchCompleted, deleteRecord}) =>{

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

export default TodoList;