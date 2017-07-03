const express = require('express');
const router = express.Router();
const TodoItem = require('../models/TodoItem.js'); 

console.log('TodoItem:', TodoItem)

router.post('/add', (req, res) => {
  console.log('req.body = ', req.body)
  const testTodo = new TodoItem({
    task: req.body.text
  });
  console.log(testTodo)
  testTodo.save()
    .then(response => {
      console.log('Successfully saved: ', testTodo)
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    })
});


module.exports = router; 