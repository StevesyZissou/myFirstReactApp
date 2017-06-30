import React from 'react'; 
import ReactDOM from 'react-dom';  
import TodoList from './TodoList.js'; 
import InputLine from './InputLine.js'

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

export default TodoApp; 