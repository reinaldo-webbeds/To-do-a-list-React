import React, {createContext, useState} from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) =>{

    const [inputText, setInputText] = useState(""); 
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [functionsTodo, setFunctionsTodo] = useState({
        deleteRecord: (todoId, todosList, setTodosList) => setTodosList(todosList.filter( r=> r.id !== todoId )),
        switchCompleted: (todoId, todosList, setTodosList) =>
            setTodosList(
                todosList.map( r => {
                if(r.id === todoId){
                    r.completed = !r.completed;
                }
                return r;
                })
            )
        
    });



    return(
        <AppContext.Provider
            value={
                {inputText,
                todos,
                status,
                filteredTodos,
                functionsTodo,
                setInputText,
                setTodos,
                setStatus,
                setFilteredTodos,
                setFunctionsTodo
                }
            }
        >
            {children}
        </AppContext.Provider>
    );

}