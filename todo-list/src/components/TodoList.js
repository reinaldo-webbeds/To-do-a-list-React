import React, {useContext} from "react";
//Import component
import Todo from "./Todo.js";
import { AppContext } from "../contexts/AppContext";

const TodoList = () => {
    const appContext = useContext(AppContext);

    const filteredTodos = appContext.filteredTodos;
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                    />
                ))}
            </ul>
        </div>
    );
};


export default TodoList;