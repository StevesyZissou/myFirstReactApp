import React from 'react'; 
import ReactDOM from 'react-dom';  
  

class InputLine extends React.Component {
	constructor(props) {
		super(props), 
		this.state = {
			typedText : ''
		}
	}

	handleTyping(event) {
		this.setState({typedText: event.target.value})
	}

	handleSubmit(event) {
		event.preventDefault()
		// console.log(this.props.addTodo)
		this.props.addTodo(this.state.typedText)
		console.log("this.state.typedText = ", this.state.typedText)
		this.setState({typedText: ''})

	}


	render() {
		return (
			<div>
				<label> Add a task: </label>
				<input type="text" value={this.state.typedText} placeholder="What needs to be done?" 
				onChange={(e) => this.handleTyping(e)}  /> 
				<button onClick={(e) => this.handleSubmit(e)}>Add a task to your list</button>
			</div>
		)
	}
}

export default InputLine

