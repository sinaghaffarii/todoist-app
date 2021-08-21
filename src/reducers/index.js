import { combineReducers } from "redux";
import { todos } from "./todos";
import {filtertodos} from './setFilterTodos'

export default combineReducers({
  todos,
  filtertodos
});
