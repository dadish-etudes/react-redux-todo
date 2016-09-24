/**
 * Todo Item
 */

import React, { PropTypes } from 'react';

const Todo = ({ onDelete, onClick, completed, text }) => (
	<li>
	<label
		onClick={onClick}
		style={{textDecoration: completed ? 'line-through': 'none'}}
	>{text}</label>
		{' '}
		<button onClick={onDelete}>x</button>
	</li>
)

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
};

export default Todo;