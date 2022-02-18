import { createStore } from "vuex";

const store = createStore({
  state: {
    todos: [],
  },
  mutations: {
    initTodo: function (state, { todos }) {
      state.todos = todos || [];
    },
    addTodo: function (state, form) {
      state.todos.push({
        id: state.todos.length ? state.todos.slice(-1)[0].id + 1 : 1,
        title: form,
        completed: false,
        createdAt: new Date().toLocaleString(),
      });
    },
    editTodo: function (state, { todo, form }) {
      todo.title = form;
      todo.updatedAt = new Date().toLocaleString();
    },
    deleteTodo: function (state, { id }) {
      let todoIndex = state.todos.indexOf(store.getters.thisTodo(id));
      state.todos.splice(todoIndex, 1);
    },
    toggleTodoStatus: function (state, { todo, status }) {
      todo.completed = status;
      todo.updatedAt = new Date().toLocaleString();
    },
  },
  actions: {},
  modules: {},
  getters: {
    thisTodo: (state) => (todoId) => {
      return state.todos.find((todo) => todo.id === todoId);
    },
  },
});

export default store;
