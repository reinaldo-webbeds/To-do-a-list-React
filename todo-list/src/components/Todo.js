import React, {useContext} from "react";
import { AppContext } from "../contexts/AppContext";

const Todo  = ({todo}) =>{


    const appContext= useContext(AppContext);
    const todos = appContext.todos;
    const setTodos = appContext.setTodos;
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed":''}`}>{todo.text}</li>   
            <button onClick={() => appContext.functionsTodo.switchCompleted(todo.id, todos, setTodos)} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={() => appContext.functionsTodo.deleteRecord(todo.id, todos, setTodos)} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;