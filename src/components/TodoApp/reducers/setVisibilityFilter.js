/**
 * Set Visibility Filter
 */

export default function setVisibilityFilter (state = 'SHOW_ALL', action) {
	
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			state = action.payload
			return state

		default:
			return state
	}

}
