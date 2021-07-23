
import React, {useEffect, useContext} from "react";
import "./App.css";

//Importing components
import Form from "./components/Form.js";
import TodoList from "./components/TodoList.js";
import {AppContext} from "./contexts/AppContext";

function App() {

  const appContext = useContext(AppContext);

  const todos = appContext.todos;             
  const setTodos = appContext.setTodos;
  const status = appContext.status;
  const setFilteredTodos = appContext.setFilteredTodos;
  const filteredTodos = appContext.filteredTodos;

  useEffect(()=> {
    getLocalTodos();
  }, []);

  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const saveLocalTodos = () =>{
      localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () =>{
    if(localStorage.getItem("todos")!==null){
      let todoLocal = JSON.parse(localStorage.getItem("todos")); 
      setTodos(todoLocal);
    }
  };

  const filterHandler = () =>{
      switch(status){
      case "all":
        setFilteredTodos(todos);
        break;
      case "completed":
        showCompletedTodos(true);
        break;
      case "uncompleted":
        showCompletedTodos(false);
        break;
    }
  };

  const showCompletedTodos = (value) =>{
    setFilteredTodos(todos.filter(r=>
      r.completed === value
    ));
  };

  return (
    <div className="App">
      <header>
      <h1>Reinaldo's Todo a List</h1>
      </header>
      <h3 id="totalItems">Total items: {filteredTodos.length}</h3>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
