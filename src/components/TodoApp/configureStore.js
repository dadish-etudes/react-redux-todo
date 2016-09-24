import { createStore } from 'redux'
import rootReducer from './reducers/index'
import DevTools from './containers/DevTools'

const defaultInitialState = {
	todos: [],
	visibilityFilter: 'SHOW_ALL'
}

const enhancer = DevTools.instrument()

export default function configureStore(initialState = defaultInitialState) {

	const store = createStore(rootReducer, initialState, enhancer)

	if (module.hot) {
	  // Enable Webpack hot module replacement for reducers
	  module.hot.accept('./reducers/index', () => {
	    const nextRootReducer = require('./reducers/index').default /* `.default` because of babel 6+ */
	    store.replaceReducer(nextRootReducer)
	  });
	}

	return store
	
}