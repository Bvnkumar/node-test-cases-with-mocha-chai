class Todos {
  constructor() {
    this.todos = [];
  }
  list() {
    return [...this.todos];
  }
  add(title) {
    let todo = {
      title,
      completed: false,
    };
    this.todos.push(todo);
  }
}
module.exports = Todos;
