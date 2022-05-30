import './App.css';
import Header from './MyComponents/Header';
// {}= we use arrow function so we have to use bresses
import { Addtodo } from './MyComponents/Addtodo';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("i am on delete of todo", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, mytodo]);
    console.log(mytodo);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <>
      <Router>
        <Header title="My Todo list" searchbar={true} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <Addtodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>


        <Footer />
      </Router>
    </>
  );
}

export default App;
