/**
 * Add Todo
 */

const addTodo = (state, action) => {
	let newState = Object.assign({}, state);
	newState.todos = [...newState.todos, {
		id: newState.todos.length,
		text: action.payload,
		completed: false
	}]
	return newState;
}

export default addTodo;
