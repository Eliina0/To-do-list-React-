import React from 'react';
import Task from './Task';

const ToDoList = ({ todoList, toggleComplete, editTask, deleteTask, setEditingIndex, editingIndex }) => {
  return (
    <ul className='todo-list'>
      {todoList.map((task, index) => (
        <Task
          key={index}
          task={task} 
          index={index}
          toggleComplete={toggleComplete}
          deleteTask={() => deleteTask(index)}
          editTask={editTask}
          setEditingIndex={setEditingIndex}
          isEditing={editingIndex === index}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
