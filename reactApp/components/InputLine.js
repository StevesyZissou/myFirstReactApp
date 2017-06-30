import React from 'react'; 
import ReactDOM from 'react-dom';  
// import TodoApp from './TodoApp.js'; 

class InputLine extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<form className = "InputLine">
				<label> Add a task: </label>
				<input type="text" placeholder="What needs to be done?" /> <input type="Submit" value="Add to your todo list" />
			</form>
		)
	}
}

export default InputLine

