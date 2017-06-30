import React from 'react'; 
import ReactDOM from 'react-dom';  
// import TodoList from './TodoList.js'; 

class Todo extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			(this.props.completed) ? 
			<li> 
				<strike> {this.props.taskText}  </strike> 
				<button type="button">   X </button> 
			</li>
			: <li> 
				{this.props.taskText}  
				<button type="button">   X </button> 
			</li>
		)
	}
}

export default Todo; 