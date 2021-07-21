
import React, {useState, useEffect} from "react";
import "./App.css";
//Importing components
import Form from "./components/Form.js";
import TodoList from "./components/TodoList.js";
import Clock from "./components/Clock";

function App() {

  const [inputText, setInputText] = useState(""); 
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

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
      let todoLocal = JSON.parse(localStorage.getItem("todos")); //No sé por qué funciona
      console.log(todoLocal);
      setTodos(todoLocal);
    }
  };

  const deleteRecord = (todoId) =>{
      setTodos(todos.filter( r=> r.id !== todoId ));
  };

  const switchCompleted = (todoId) =>{
      setTodos(
        todos.map( r => {
          if(r.id === todoId){
            r.completed = !r.completed;
          }
          return r;
        })
      );
  };

  const filterHandler = () =>{
      switch(status){
      case "all":
        setFilteredTodos(todos);
        break;
      case "completed":
        doCompletedTodos(true);
        break;
      case "uncompleted":
        doCompletedTodos(false);
        break;
    }
  };

  const doCompletedTodos = (value) =>{
    setFilteredTodos(todos.filter(r=>
      r.completed === value
    ));
  };

  return (
    <div className="App">
      <header>
      <h1>Reinaldo's Todo a List</h1>
      </header>
      <Form 
        todos={todos} 
        setTodos={setTodos} 
        setInputText = {setInputText} 
        inputText={inputText}
        setStatus={setStatus}
      />
      <TodoList 
        todos={filteredTodos} 
        deleteRecord={deleteRecord}
        switchCompleted={switchCompleted}
      />
      <Clock />
    </div>
  );
}

export default App;
