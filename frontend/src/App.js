import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodoList from "./components/todo-list.component";
import DeleteTodo from "./components/delete-todo.component";
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <img src={logo} width="30" height="30" alt="reactjs.org" />
          </a>
          <Link to="/" className="navbar-brand">ToDo App (Powered by React)</Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">ToDos</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create ToDo</Link>
              </li>
            </ul>
          </div>
          </nav>
          <br/>
          <Route path="/" exact component={TodoList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/delete/:id" component={DeleteTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
