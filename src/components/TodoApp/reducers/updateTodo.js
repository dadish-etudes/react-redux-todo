/**
 * Update Todo
 */

const updateTodo = (state, action) => {
	const id = action.payload.id
	const property = action.payload.property
	const value = action.payload.value

	let newState = Object.assign({}, state, {
		todos: state.todos.map(todo => {
			if (todo.id === id) {
				todo[property] = value
			}
			return todo
		})
	})
	return newState;
}

export default updateTodo;
