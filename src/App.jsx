import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      setTaskList([...taskList, input]);
      setInput('');
    }
  };

  const handleDelete = (index) => {
    const updatedTodos = [...taskList];
    updatedTodos.splice(index, 1);
    setTaskList(updatedTodos);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setInput(taskList[index]);
  };

  const handleUpdate = (index) => {
    if (input.trim() !== '') {
      const updatedTodos = [...taskList];
      updatedTodos[index] = input;
      setTaskList(updatedTodos);
      setEditIndex(null);
      setInput('');
    }
  };

  return (
    <>
      <h1>Todo List</h1>
      <input
        className='searchInput'
        type='text'
        name='input'
        id='input'
        placeholder='Add a task'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
      <div>
        <ul>
          {taskList.map((task, index) => (
            <li key={index}>
              {editIndex === index ? (
                <input
                  type='text'
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
              ) : (
                <span>{task}</span>
              )}
              {editIndex === index ? (
                <button onClick={() => handleUpdate(index)}>Update</button>
              ) : (
                <button onClick={() => handleEdit(index)}>Edit</button>
              )}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
