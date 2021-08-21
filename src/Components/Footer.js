import React from "react";
import TodosFilter from "./TodosFilter";

const Footer = () => {
  return (
    <div className="footer">
      <p>Show :</p>
      <TodosFilter filter="SHOW_ALL">All</TodosFilter>
      <TodosFilter filter="SHOW_ACTIVE">Active</TodosFilter>
      <TodosFilter filter="SHOW_COMPLETED">Completed</TodosFilter>
    </div>
  );
};

export default Footer;
