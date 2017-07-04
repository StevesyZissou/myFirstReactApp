import React from 'react'; 
import ReactDOM from 'react-dom';  
import TodoList from './TodoList.js'; 
import InputLine from './InputLine.js'; 
import axios from 'axios';

// var dummyData = [
// {taskText: 'Buy bagels', completed: false}, 
// {taskText: 'Learn code', completed: false}, 
// {taskText: 'Call home', completed: true}, 
// {taskText: 'Play in the NBA', completed: false}, 
// {taskText: 'Finish middle school', completed: true}
// ]

const dbUrl = "http://localhost:3000/db";

class TodoApp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
    		todos: []
    	}
	}

	componentDidMount() {
		axios.get(dbUrl + '/all')
		.then((response) => 
			{
			console.log(response)
			this.setState({todos: response.data})
			}
		)
	}

	addTodo(task) {
		console.log(task)
		axios.post(dbUrl + '/add', {text: task})
		.then(response=>
			{
				var taskToAdd = {
					task: response.data.task, 
					completed: response.data.completed, 
					_id: response.data._id
				}
				console.log('taskToAdd = ', taskToAdd)
				console.log('this.state.todos = ', this.state.todos)
				var arr = this.state.todos.slice()
				arr = arr.concat([taskToAdd])
				console.log('arr = ', arr)
				this.setState({todos: arr})
			}
		)
		.catch(function(error) {
			console.log("The error is: ", error)
		})
	}

	removeTodo(index) {
		var arr = this.state.todos.splice()
		arr.splice(index, 1)
		this.setState({todos:arr})
	}

	Toggletodo(id) {
		axios.post(dbUrl + '/toggle', {id: id})
		.then((response) => {
			console.log(response)

			var toggledTask = response.data; 
			console.log('toggledTask = ', toggledTask)

			var arr = this.state.todos.slice(); 
			console.log('arr = ', arr)

			
			arr = arr.map((task) => {
				if (task._id = toggledTask._id) {
					return toggledTask
				} else {
					return task 
				}
			})
			console.log('arr = ', arr)
			this.setState({todos: arr})
		})

		// console.log('index number = ', index)
		// var arr = this.state.todos.splice()
		// if (arr[index].completed === false) {
		// 	arr[index].completed = true;
		// } else {
		// 	arr[index].completed = false
		// }
		// this.setState({todos:arr})
	}

	render() {
		return (
			<div className = "TodoApp">
				<InputLine 
					addTodo = {(task) => this.addTodo(task)} 
				/>
				<TodoList 
					todos = {this.state.todos} 
					todoXClick = {(id) => this.removeTodo(id)}
					Toggletodo = {(id) => this.Toggletodo(id)}
				/> 
			</div>
		)
	}
}

export default TodoApp; 