const express = require('express');
const router = express.Router();
const TodoItem = require('../models/TodoItem.js'); 

console.log('TodoItem:', TodoItem)

// Getting all the todos from the database
router.get('/all', (req, res) => {
	console.log('Made it here!')
		TodoItem.find({})
		.then(response => {
			console.log('Succesfully retrived data from db!')
			res.send(response)
		})	
})

// Adding a todo
router.post('/add', (req, res) => {
  console.log('req.body = ', req.body)
  const testTodo = new TodoItem({
    task: req.body.text, 
    completed: false
  });
  console.log(testTodo)
  testTodo.save()
    .then(response => {
      console.log('Successfully saved: ', testTodo); 
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    })
});

router.post('/toggle', (req, res) => {
	const id = req.body.id 
	console.log('id = ', id)
	
	TodoItem.findById(id).exec()
	.then((task) => {
		if (task.completed === false) {
			task.completed = true
		} else {
			task.completed = false	
		}
		TodoItem.findByIdAndUpdate(id, {completed: task.completed})
		.then((task) => {
			console.log('task = ', task)
			res.send(task)
		})
	})		
	.catch((error) => {
		res.send(error)
	})
})	


		// console.log('task =', task)
		// console.log('task.completed = ', task.completed)
		// if (task.completed === false) {
		// 	TodoItem.findByIdAndUpdate(id, {
		// 		completed: true
		// 	})
		// } else {
		// 	TodoItem.findByIdAndUpdate(id, {
		// 		completed: false
		// 	})
		// }
		// console.log('task.completed = ', task.completed)
// 	})
// 	.then(response => {
// 		TodoItem.findById(id)
// 		.then((item) => res.send(item))
// 	})	
// 	.catch(error => {
// 		res.send(error)
// 	})
// })		


module.exports = router; 