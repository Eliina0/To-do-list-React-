import React, {useState} from 'react';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import './App.css';

const App = () => {
  const todosLS = JSON.parse(localStorage.getItem('todos')) || [];
  const [todoList, setTodoList] = useState(todosLS);
  const [editingIndex, setEditingIndex] = useState(null);
  const [showCompleted, setShowCompleted] = useState(false);
  
  const addTask = (newTask) => {
    const updatedList = [...todoList, {text: newTask, completed: false}];
    setTodoList(updatedList);
    localStorage.setItem('todos', JSON.stringify(updatedList));
  }

  const toggleComplete = (index) => {
    const updatedList = todoList.map((task , mapIndex) => (
      mapIndex === index ? {...task, completed : !task.completed} : task
    ))
    setTodoList(updatedList);
    localStorage.setItem('todos', JSON.stringify(updatedList));
  }

  const deleteTask = (index) => {
    const updatedList = todoList.filter((task, filterIndex) => filterIndex !== index );
    setTodoList(updatedList);
    localStorage.setItem('todos', JSON.stringify(updatedList));
  }

  const editTask = (index , editText) => {
    console.log(index);
    console.log(editText);
    const updatedList = [...todoList];
    updatedList[index] = { ...updatedList[index], text: editText };
    setTodoList(updatedList);
    localStorage.setItem('todos', JSON.stringify(updatedList));
    setEditingIndex(null);
  }

  const filteredList = showCompleted ? todoList.filter(task => task.completed) : todoList;

  return (
    <div className='app-container'>
      <h1><HiOutlineClipboardDocumentList/>To Do List </h1>
      <ToDoInput addTask={addTask}/>
      <label>
        <input type='checkbox' checked={showCompleted} onChange={() => setShowCompleted(!showCompleted)} />
        Show Done Tasks
      </label>
      <ToDoList todoList={filteredList}
                toggleComplete={toggleComplete}
                editTask={editTask}
                deleteTask={deleteTask}
                setEditingIndex={setEditingIndex}
                editingIndex={editingIndex}/>
    </div>
  )
}

export default App