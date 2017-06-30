import React from 'react'; 
import ReactDOM from 'react-dom';  

var dummyData = ['Buy bagels', 'Learn code', 'Call home']

class TodoList extends React.Component {
  constructor(props) {
    super(props); 
  }
  render() {
  	return (
  		<div>
  			<ul>
  				{dummyData.map((task) => 
  					<Todo task = {task} />
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
			<li> {this.props.task}   <button type="button"> X </button> </li>
		)
	}
 }

ReactDOM.render(<TodoList />, document.getElementById('root')); 