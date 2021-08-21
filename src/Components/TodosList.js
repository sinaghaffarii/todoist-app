import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { toggleTodo } from "../actions";

class TodosList extends React.Component {
  render() {
    let { todos } = this.props;
    return (
      <div>
        <ul>
          {todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                {...todo}
                onClick={() => this.props.dispatch(toggleTodo(todo.id))}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

const getTodosFilter = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_ACTIVE":
      return todos.filter((t) => !t.completed);
    case "SHOW_COMPLETED":
      return todos.filter((t) => t.completed);
    default:
      return todos;
  }
};

const mapStateToProps = (state) => {

  return {
    todos: getTodosFilter(state.todos, state.filtertodos),
  };
};

export default connect(mapStateToProps)(TodosList);
