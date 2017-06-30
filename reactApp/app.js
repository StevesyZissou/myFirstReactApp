import React from 'react'; 
import ReactDOM from 'react-dom';  

var dummyData = ['Buy bagels', 'Learn code', 'Call home']

class TodoApp extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				<InputLine />
				<TodoList tasks = {dummyData} /> 
			</div>
		)
	}
}

class InputLine extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<form>
				<label> Add a task: </label>
				<input type="text" placeholder="What needs to be done?" /> <input type="Submit" value="Add to your todo list" />
			</form>
		)
	}
}

class TodoList extends React.Component {
  constructor(props) {
    super(props); 
  }
  render() {
  		return (
	  		<div>
	  			<ul>
	  				{this.props.tasks.map((task) => 
	  					<Todo task = {task} />
	  				)}
	  			</ul>
	  		</div>
  	)
  } 
}   

{() => this.handleSubmit} 

class Todo extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<li> {this.props.task}   <button type="button"> X </button> </li>
		)
	}
 }

ReactDOM.render(<TodoApp />, document.getElementById('root')); 