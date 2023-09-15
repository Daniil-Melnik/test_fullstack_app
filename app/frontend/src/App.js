import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import './App.css';
 
function App() {
  const [todoItems, setTodoItems] = useState([]);
 
  useEffect(() => {
    fetch('http://localhost:5000/api/todo-items')
      .then((res) => res.json())
      .then((result) => setTodoItems(result.data));
  }, []);
 
  return (
    <div>
      {todoItems.map((item) => (
        <div>
          <p>{item.name}</p>
          <p>{item.discription}</p>
          <img src={item.url} />
        </div>
      ))}
      
    </div>
  );
}
 
export default App;