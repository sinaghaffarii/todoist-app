import React from "react";
import { connect } from "react-redux";

class Todo extends React.Component {
  render() {
    let { text, onClick, completed } = this.props;
    return (
      <li
        className="todo"
        onClick={onClick}
        style={{
          textDecoration: completed ? "line-through" : "none",
          backgroundColor: completed ? "#FFB6B6" : "#ebfffa",
        }}
      >
        <p>{text}</p>
      </li>
    );
  }
}

export default connect()(Todo);
