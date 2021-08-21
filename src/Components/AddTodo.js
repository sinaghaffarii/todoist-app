import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class AddTodo extends React.Component {
  state = {
    inputValue: "",
  };

  changeInputHandler = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    if (this.state.inputValue !== "") {
      this.props.dispatch(addTodo(this.state.inputValue));
    }
    this.setState({
      inputValue: "",
    });
  };

  render() {
    return (
      <div>
        <form className="form-container" onSubmit={this.submitHandler}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.changeInputHandler}
          />
          <button type="submit">AddTodo</button>
        </form>
      </div>
    );
  }
}

export default connect()(AddTodo);
