let todoNextId = 0;

export const addTodo = (text) => ({
  type: "ADD_TODO",
  id: todoNextId++,
  text,
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id,
});


export const filterTodo = filter => ({
  type: 'SET_FILTER_TODO',
  filter,
})