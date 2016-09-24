/**
 * Delete Todo
 */

const deleteTodo = (state, action) => {
	const id = action.payload;
	
	// find where the todo is located
	let index = null;
	state.todos.find(function (todo, i) {
		if (todo.id === id) {
			index = i;
			return true;
		}
	})

	// create new state with spliced out the targed todo
	let todos = state.todos.slice()
	todos.splice(index, 1)
	let newState = Object.assign({}, state, {
		todos: todos
	})
	return newState;
}

export default deleteTodo;
