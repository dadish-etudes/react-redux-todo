/**
 * VisibleTodoList 
 * 
 * Wraps the TodoList component and connects it to the redux store
 * 
 * @container
 */

import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
	switch(filter) {
		
		case 'SHOW_ALL':
			return todos;
			break;
		
		case 'SHOW_ACTIVE':
			return todos.filter(todo => !todo.completed);
			break;
		
		case 'SHOW_COMPLETED':
			return todos.filter(todo => todo.completed);
			break;

	}
} 

const mapStateToProps = (state) => {
	return {
		todos: getVisibleTodos(state.todos, state.visibilityFilter)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTodoClick: function (id) {
			dispatch(toggleTodo(id));
		}
	}
}

const VisibleTodoList = connect(
	
	mapStateToProps,

	mapDispatchToProps

	)(TodoList)

export default VisibleTodoList;
