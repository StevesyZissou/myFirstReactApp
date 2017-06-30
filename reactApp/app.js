import React from 'react'; 
import ReactDOM from 'react-dom';  

var dummyData = [
{taskText: 'Buy bagels', completed: false}, 
{taskText: 'Learn code', completed: false}, 
{taskText: 'Call home', completed: true}, 
{taskText: 'Play in the NBA', completed: false}, 
{taskText: 'Finish middle school', completed: true}
]

class TodoApp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
    	todos: []
    }
	}

	componentDidMount() {
		this.setState({todos: dummyData})
	}

	render() {
		return (
			<div className = "TodoApp">
				<InputLine />
				<TodoList todos = {this.state.todos} /> 
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
			<form className = "InputLine">
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

ReactDOM.render(<TodoApp />, document.getElementById('root')); 