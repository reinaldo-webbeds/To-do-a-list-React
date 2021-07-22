
import React, {useEffect, useContext} from "react";
import "./App.css";

//Importing components
import Form from "./components/Form.js";
import TodoList from "./components/TodoList.js";
import {AppContext} from "./contexts/AppContext";

function App() {

  const appContext = useContext(AppContext);

  // Es posible que lo tenga que declararlas como variables
  // Si falla deberé usar punteros o usar directamente el app con el valor que deseo

  const todos = appContext.todos;             
  const setTodos = appContext.setTodos;
  const status = appContext.status;
  const setFilteredTodos = appContext.setFilteredTodos;

  //const [inputText, setInputText] = useState(""); 
  //const [todos, setTodos] = useState([]);
  //const [status, setStatus] = useState("all");
  //const [filteredTodos, setFilteredTodos] = useState([]);

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
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
