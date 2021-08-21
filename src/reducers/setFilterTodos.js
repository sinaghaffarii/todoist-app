export const filtertodos = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "SET_FILTER_TODO":
      return action.filter;

    default:
      return state;
  }
};
