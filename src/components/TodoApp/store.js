import { createStore } from 'redux'
import rootReducer from './reducers/index'

const store = createStore(rootReducer, {
	todos: [],
	visibilityFilter: 'SHOW_ALL'
})

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers/index', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store