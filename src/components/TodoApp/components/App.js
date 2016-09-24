/**
 * Todo App
 */

import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const style = {
	margin: 'auto',
	maxWidth: '600px'
};

const App = () => {
	return (
		<div style={style}>
			<AddTodo />
			<VisibleTodoList />
			<Footer />
		</div>
	)
}

export default App;