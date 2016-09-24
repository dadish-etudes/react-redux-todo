import addTodo from './addTodo'
import updateTodo from './updateTodo'
import deleteTodo from './deleteTodo'
import setVisibilityFilter from './setVisibilityFilter'

const defaultState = {
	todos: [],
	visibilityFilter: 'SHOW_ALL'
}

const reducersMap = {
	'ADD_TODO': addTodo,
	'UPDATE_TODO': updateTodo,
	'DELETE_TODO': deleteTodo,
	'SET_VISIBILITY_FILTER': setVisibilityFilter,
}

let todoApp = (state = defaultState, action) => {
	let reducer = reducersMap[action.type];
	if (reducer) return reducersMap[action.type](state, action)
	return state;
}

export default todoApp