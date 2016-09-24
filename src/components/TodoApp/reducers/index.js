import todos from './todos'
import setVisibilityFilter from './setVisibilityFilter'

export default function todoApp(state = {}, action) {
	return {
		todos: todos(state.todos, action),
		visibilityFilter: setVisibilityFilter(state.visinilityFilter, action)
	}
}