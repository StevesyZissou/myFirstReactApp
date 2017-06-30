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
	  				{this.props.todos.map((task) => 
	  					<Todo 
	  					taskText = {task.taskText}
	  					completed = {task.completed}
	  					/>
	  				)}
	  			</ul>
	  		</div>
  	)
  } 
}

export default TodoList; 