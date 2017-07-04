import React from 'react'; 
import ReactDOM from 'react-dom';  
import Todo from './Todo.js';
// import TodoApp from './TodoApp.js'; 

class TodoList extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
  		return (
	  		<div>
	  			<ul>
	  				{this.props.todos.map((task, index) => 
	  					<Todo 
		  					key = {task._id}
		  					id = {task._id}
		  					taskText = {task.task}
		  					completed = {task.completed}
		  					xClick = {(id) => this.props.todoXClick(id)}
		  					Toggletodo = {(id) => this.props.Toggletodo(id)}
	  					/>
	  				)}
	  			</ul>
	  		</div>
  	)
  } 
}

export default TodoList; 