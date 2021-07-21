import React from "react";

const Todo  = ({todo , deleteRecord, switchCompleted}) =>{

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed":''}`}>{todo.text}</li>   
            <button onClick={() => switchCompleted(todo.id)} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={() => deleteRecord(todo.id)} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;