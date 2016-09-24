/**
 * Todo Actions
 */

export const addTodo = (text) => {
	return {
		type: 'ADD_TODO',
		payload: text,
	}
}

export const setVisibilityFilter = (filter) => {
	return {
		type: 'SET_VISIBILITY_FILTER',
		payload: filter,
	}
}

export const updateTodo = (id, property, value) => {
	return {
		type: 'UPDATE_TODO',
		payload: {
			id,
			property,
			value
		}
	}
}

export const deleteTodo = (id) => {
	return {
		type: 'DELETE_TODO',
		payload: id
	}
}