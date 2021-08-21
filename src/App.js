import React from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import Footer from "./Components/Footer";
import TodosList from "./Components/TodosList";

class App extends React.Component {
  render() {
    return (
      <div>
        <Footer />
        <AddTodo />
        <TodosList />
      </div>
    );
  }
}

export default App;
