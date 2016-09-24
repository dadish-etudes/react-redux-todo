/**
 * Todos Reduces
 */

export default function todos (state = [], action) {
	
	let id;
	
	if (typeof action.payload === 'object') {
		id = action.payload.id
	} else {
		id = action.payload
	}

	switch (action.type) {
		case 'ADD_TODO':
			return [{
				id: id,
				text: action.payload.text,
				completed: false
			}, ...state]

		case 'UPDATE_TODO':
			return state.map(todo => {
				if (todo.id !== id) return todo
				return Object.assign({}, todo, {
					[action.payload.property]: action.payload.value
				})
			})

		case 'DELETE_TODO':
			return state.filter(todo => todo.id !== id)

		default:
		 return state;
	}
}