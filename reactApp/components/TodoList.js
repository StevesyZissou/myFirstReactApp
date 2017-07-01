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
		  					key = {index}
		  					index = {index}
		  					taskText = {task.taskText}
		  					completed = {task.completed}
		  					xClick = {(index) => this.props.todoXClick(index)}
		  					Toggletodo = {(index) => this.props.Toggletodo(index)}
	  					/>
	  				)}
	  			</ul>
	  		</div>
  	)
  } 
}

export default TodoList; 