import React from "react";
import { connect } from "react-redux";
import { filterTodo } from "../actions";

class TodosFilter extends React.Component {
  render() {
    let { children, active, onClick } = this.props;
    return (
      <div>
        <button disabled={active} onClick={onClick}>
          {children}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.filtertodos,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(filterTodo(ownProps.filter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosFilter);
