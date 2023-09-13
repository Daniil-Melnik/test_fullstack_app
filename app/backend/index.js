const express = require('express');
 
const PORT = process.env.PORT || 5000;
const app = express();
 
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

const todoItems = require('./todo.json');
app.get('/api/todo-items', (req, res) => {
  res.json({ data: todoItems });
});
 
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});