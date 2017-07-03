import React from 'react'; 
import ReactDOM from 'react-dom';  
import TodoList from './TodoList.js'; 
import InputLine from './InputLine.js'; 
import axios from 'axios';

var dummyData = [
{taskText: 'Buy bagels', completed: false}, 
{taskText: 'Learn code', completed: false}, 
{taskText: 'Call home', completed: true}, 
{taskText: 'Play in the NBA', completed: false}, 
{taskText: 'Finish middle school', completed: true}
]

const dbUrl = "http://localhost:3000/db";

class TodoApp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
    		todos: []
    	}
	}

	componentDidMount() {
		this.setState({todos: dummyData});
	}

	addTodo(task) {
		console.log(task)
		axios.post(dbUrl + '/add', {text: task})
		.then((response) =>
			{
				var taskToAdd = {taskText: response.data.task, completed: response.data.completed}
				dummyData.push(taskToAdd)
				this.setState({todos: dummyData})
			}
		)
		.catch(function(error) {
			console.log("The error is: ", error)
		})


		// console.log(dummyData) 
		// dummyData = dummyData.concat([{taskText: task, completed: false}]); 
		// this.setState({todos: dummyData})//, console.log("dummyData = ", dummyData)); 
	}

	removeTodo(index) {
		console.log('index', index)
		dummyData.splice(index, 1)
		this.setState({todos:dummyData})
	}

	Toggletodo(index) {
		console.log('index number = ', index)
		if (dummyData[index].completed === false) {
			dummyData[index].completed = true;
		} else {
			dummyData[index].completed = false
		}
		this.setState({todos:dummyData})
	}

	render() {
		return (
			<div className = "TodoApp">
				<InputLine 
					addTodo = {(task) => this.addTodo(task)} 
				/>
				<TodoList 
					todos = {this.state.todos} 
					todoXClick = {(index) => this.removeTodo(index)}
					Toggletodo = {(index) => this.Toggletodo(index)}
				/> 
			</div>
		)
	}
}

export default TodoApp; 