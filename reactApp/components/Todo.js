import React from 'react'; 
import ReactDOM from 'react-dom';  
// import TodoList from './TodoList.js'; 

class Todo extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<li> 
				{(this.props.completed) ? 
				<strike> {this.props.taskText} </strike> : this.props.taskText}
				<button type="button" onClick={() => this.props.xClick(this.props.index)}> X </button>
				{(this.props.completed) ?
				<button type="button" onClick={() => this.props.Toggletodo(this.props.index)} > Uncross </button>
				: <button type="button" onClick={() => this.props.Toggletodo(this.props.index)} > Crossout </button>
				}
			</li>
		)
	}
}

// 

export default Todo; 

// (this.props.completed) ? 
// 			<li> 
// 				<strike> {this.props.taskText}  </strike> 
// 				<button type="button" >   X </button> 
// 			</li>
// 			: <li> 
// 				{this.props.taskText}  
// 				<button type="button" onClick={() => this.props.xClick()}>   X </button> 
// 			</li>
			