/**
 * Todo List
 */

import React, { PropTypes } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onTodoClick }) => {
	return (
		<ul>
			{todos.map(todo => 
				<TodoItem
					key={todo.id}
					{...todo}
					onClick={() => onTodoClick(todo.id)}
				/>
			)}
		</ul>
	)
}

TodoList.propTypes = {
	todos : PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		completed: PropTypes.bool.isRequired,
		text: PropTypes.string.isRequired,
	}).isRequired).isRequired,
	onTodoClick: PropTypes.func.isRequired,
}

export default TodoList;